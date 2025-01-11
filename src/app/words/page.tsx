import PageLayout from '@/components/layout/pageLayout'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import TypographyH2 from '@/components/layout/typographyH2'

export default function WordsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <PageLayout>
        <TypographyH2>- 단어장 -</TypographyH2>
      </PageLayout>
    </Suspense>
  )
}
