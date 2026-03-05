import TopicDetailsClient from "./client"

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function TopicDetailsPage({ params }: { params: { id: string } }) {
    return <TopicDetailsClient id={params.id} />
}
