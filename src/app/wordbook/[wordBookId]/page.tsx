import PageLayout from '@/components/layout/pageLayout'
import TypographyH2 from '@/components/layout/typographyH2'
import { wordBooks } from '@/constants/wordbook'
import ChapterItem from './chapterItem'

type WordBookIdPageProps = {
  params: Promise<{ wordBookId: string }>
}

export default async function WordBookIdPage({ params }: WordBookIdPageProps) {
  const wordBookId = +(await params).wordBookId
  return wordBookId >= 0 && wordBookId < 6 ? (
    <PageLayout>
      <TypographyH2>{wordBooks[wordBookId].wordBookTitle}</TypographyH2>
      <ul className="my-10 grid grid-cols-1 grid-rows-3 gap-4 rounded-md border px-4 py-10 md:grid-cols-2">
        {wordBooks[wordBookId].chapterList.map((chapter, index) => {
          return <ChapterItem key={index} chapter={chapter} />
        })}
      </ul>
    </PageLayout>
  ) : (
    <PageLayout>Wordbook not found</PageLayout>
  )
}
