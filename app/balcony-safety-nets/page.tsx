import { NetServicePage, netMetadata } from '@/components/net-service-page'

export const metadata = netMetadata('balcony')
export default function Page() { return <NetServicePage kind="balcony" /> }
