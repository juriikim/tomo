import PageLayout from '@/components/layout/pageLayout'
import { categorys } from '@/constants/words'
import Error from '@/app/error'

type CategoryPageProps = {
  params: Promise<{ category: string }>
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = decodeURIComponent((await params).category)

  return categorys.includes(category) ? <PageLayout>a</PageLayout> : <Error />
}
