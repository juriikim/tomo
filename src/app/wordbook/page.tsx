import PageLayout from '@/components/layout/pageLayout'
import TypographyH2 from '@/components/layout/typographyH2'
import { wordBooks } from '@/constants/wordbook'
import BookItem from './bookItem'

export default function WordBook() {
  return (
    <PageLayout>
      <TypographyH2>단어장</TypographyH2>
      <ul className="my-10 grid grid-cols-1 grid-rows-3 gap-4 rounded-md border px-4 py-10 md:grid-cols-2">
        {Object.values(wordBooks).map((wordBook, index) => {
          return <BookItem key={index} wordBook={wordBook} />
        })}
      </ul>
    </PageLayout>
  )
}
