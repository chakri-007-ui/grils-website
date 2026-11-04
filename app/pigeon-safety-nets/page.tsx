import { NetServicePage, netMetadata } from '@/components/net-service-page'

export const metadata = netMetadata('pigeon')
export default function Page() { return <NetServicePage kind="pigeon" /> }
