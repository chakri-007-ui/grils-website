"""Verify actual production HTML after a Next.js build; no dependencies required."""
import json
from html.parser import HTMLParser
from pathlib import Path
import xml.etree.ElementTree as ET

DOMAIN = 'https://www.invisiblegrillsinvishakhapatnam.com'
ROUTES = ['/', '/invisible-grills', '/cloth-hangers', '/cricket-nets',
          '/Iron-grills', '/shields', '/shoe-racks', '/service-areas', '/balcony-safety-nets', '/pigeon-safety-nets']
BUILD = Path(__file__).resolve().parents[1] / '.next/server/app'


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.meta = {}
        self.links = []
        self.h1s = 0
        self.title = ''
        self.schemas = []
        self.images = []
        self.capture = None
        self.parts = []
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'img':
            self.images.append(attrs)
        if tag == 'meta':
            self.meta[attrs.get('name', attrs.get('property'))] = attrs.get('content')
        if tag in ('link', 'a'):
            self.links.append((tag, attrs))
        if tag == 'h1':
            self.h1s += 1
        if tag == 'title' or (tag == 'script' and attrs.get('type') == 'application/ld+json'):
            self.capture = tag
            self.parts = []

    def handle_data(self, data):
        if self.capture:
            self.parts.append(data)

    def handle_endtag(self, tag):
        if tag == self.capture:
            content = ''.join(self.parts)
            if tag == 'title':
                self.title = content
            else:
                self.schemas.append(json.loads(content))
            self.capture = None


titles = set()
descriptions = set()
for route in ROUTES:
    path = BUILD / ('index.html' if route == '/' else route.lstrip('/') + '.html')
    page = Page(path.read_text(encoding='utf-8'))
    expected = DOMAIN + ('' if route == '/' else route)
    assert page.title.endswith(' | Prasad Enterprises'), (route, page.title)
    assert page.title not in titles, ('duplicate title', route)
    titles.add(page.title)
    description = page.meta.get('description')
    assert description and description not in descriptions, ('description', route)
    descriptions.add(description)
    canonical = [a['href'] for tag, a in page.links if tag == 'link' and a.get('rel') == 'canonical']
    assert canonical == [expected], (route, canonical)
    assert page.meta.get('og:url') == expected, route
    assert page.meta.get('og:title') == page.title, route
    assert page.meta.get('twitter:card') == 'summary_large_image', route
    assert page.h1s == 1, (route, 'h1 count', page.h1s)
    optimized = [im for im in page.images if im.get('src', '').startswith('/_next/image')]
    assert optimized, (route, 'missing responsive images')
    assert all('width' in im and 'height' in im and 'srcset' in im for im in optimized), route
    assert all('alt' in im for im in page.images), route
    business = next(s for s in page.schemas if s.get('@type') == 'HomeAndConstructionBusiness')
    assert business['name'] == 'Prasad Enterprises', route
    assert business['address']['postalCode'] == '530045', route
    assert business['address']['streetAddress'] == 'NTR Statue, NTR Marg, Sagar Nagar, Endada', route
    assert business['hasMap'] == 'https://www.google.com/maps/place/Vizag+Invisible+Grills/data=!4m2!3m1!1s0x0:0xb9c4fc2ddfd36de2', route
    if route not in ('/', '/service-areas'):
        graph = next(s['@graph'] for s in page.schemas if '@graph' in s)
        assert {s['@type'] for s in graph} == {'Service', 'BreadcrumbList'}, route
    if route != '/service-areas':
        assert any(tag == 'a' and a.get('href') == '/service-areas' for tag, a in page.links), route
    print(f'PASS {route}: metadata, canonical, heading, structured data and navigation')

xml = ET.fromstring((BUILD / 'sitemap.xml.body').read_text(encoding='utf-8'))
urls = [node.text for node in xml.findall('{*}url/{*}loc')]
assert sorted(urls) == sorted(DOMAIN + route for route in ROUTES), urls
robots = (BUILD / 'robots.txt.body').read_text(encoding='utf-8')
assert 'Allow: /' in robots and f'Sitemap: {DOMAIN}/sitemap.xml' in robots
print('PASS sitemap and robots: all ten canonical URLs included')
