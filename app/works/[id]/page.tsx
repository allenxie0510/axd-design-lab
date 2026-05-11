import works from '@/data/works.json'
import WorkDetailClient from './WorkDetailClient'

interface Props {
  params: { id: string }
}

export default function WorkDetailPage({ params }: Props) {
  return <WorkDetailClient workId={params.id} />
}

export async function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }))
}
