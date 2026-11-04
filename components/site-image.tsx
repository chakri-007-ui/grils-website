import Image, { type ImageProps } from 'next/image'
import dimensions from '@/lib/image-dimensions.json'

type Props = Omit<ImageProps, 'src' | 'width' | 'height'> & { src: string }

/** Keep original image proportions while serving device-sized, cached images. */
export function SiteImage({ src, sizes, ...props }: Props) {
  const size = (dimensions as Record<string, number[]>)[src]
  if (!size) return <img src={src} {...props} />
  const small = props.className?.includes('brand-mark') || /\/(whatsapp|insta|facebook)\.png$/.test(src)
  return <Image src={src} width={size[0]} height={size[1]} sizes={sizes ?? (small ? '48px' : '(max-width: 760px) 100vw, 50vw')} {...props} />
}
