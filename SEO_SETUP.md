# Prasad Enterprises SEO launch

This change prepares the site for invisible grill and cloth drying hanger searches in Visakhapatnam and across Andhra Pradesh. It does not guarantee search positions or submit the website to Google.

## Publish and verify

1. Review and merge the pull request, then confirm the Vercel production deployment succeeds.
2. Keep `https://www.invisiblegrillsinvishakhapatnam.com` as the production domain. The non-www address already redirected there during the initial audit. Check that any other public production aliases redirect to this domain too.
3. Add a Domain property for `invisiblegrillsinvishakhapatnam.com` in [Google Search Console](https://search.google.com/search-console). Verify using Google's DNS TXT record at the domain's DNS provider. Alternatively, use a URL-prefix property and set `GOOGLE_SITE_VERIFICATION` in Vercel to the **content value** of Google's HTML verification tag, then redeploy.
4. Submit `https://www.invisiblegrillsinvishakhapatnam.com/sitemap.xml` in Search Console. Inspect the homepage, invisible-grills page, cloth-hangers page and service-areas page with URL Inspection. Request indexing where appropriate.
5. Check indexing and search performance over time. Compare enquiries and clicks for the actual services and locations rather than expecting immediate ranking changes.

## Local search work outside the code

- Claim or verify the real [Google Business Profile](https://www.google.com/business/) for Prasad Enterprises. Use the same business name, phone number and website. Provide the genuine business address or configure a service-area business as appropriate; do not invent offices in other cities.
- Set service areas according to Google's current Business Profile rules and your real operations. The website's statewide coverage does not imply local offices or guarantee Maps visibility everywhere.
- Add genuine installation photos and ask customers for honest reviews. Confirm existing warranty, customer-count and safety claims on the website before advertising them further.
- Add project case studies for completed jobs, with permission, including the actual town, service and relevant installation details. Add city-specific pages only when there is useful, distinct local information to publish.

## PIN codes and statewide coverage

The website states statewide Andhra Pradesh service coverage and lets customers send their town and six-digit PIN code in the quote enquiry. This is not a postal-code lookup or an Andhra Pradesh PIN-code validator; the team confirms the customer's address, visit availability and quote.

There are no fabricated PIN-code lists, hidden location keywords or duplicate pages for every PIN code. [Google's spam policies](https://developers.google.com/search/docs/essentials/spam-policies) identify keyword stuffing and doorway pages as potential violations. If a customer-facing PIN-code availability lookup is needed later, use a verified postal dataset and real scheduling/service rules.

## Technical verification

- Every public page has its own title, description, canonical URL and social metadata.
- `/robots.txt` permits crawling and points to `/sitemap.xml`; the sitemap includes the eight public pages.
- Organization structured data uses existing contact details and the owner-confirmed business name and statewide coverage. No unverified street address, ratings or opening hours are supplied. Service pages have Service and BreadcrumbList data; this does not promise a Google rich result.
- Run `npm ci` and `npm run build`. If the local Windows Turbopack CSS worker fails, `npm run build -- --webpack` validates the production site with Next.js's alternate bundler without changing Vercel's build configuration.
- After building, run `python scripts/check_seo.py` to check the generated HTML, metadata, structured data, sitemap, robots file and service-area links.
