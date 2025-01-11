import PageLayout from '@/components/layout/pageLayout'
import { Suspense } from 'react'
import Loading from '@/app/loading'
import TypographyH2 from '@/components/layout/typographyH2'

export default function WordsPage() {
  const wordsBooks = ['N1', 'N2', 'N3', 'N4', 'N5']
  return (
    <Suspense fallback={<Loading />}>
      <PageLayout>
        <TypographyH2>- 단어장 -</TypographyH2>
        <p className="mt-4 text-center">
          수준별 단어장으로 맞춤형 학습을 진행할 수 있습니다.
        </p>
        <p className="text-center">
          단어 카드를 넘기며 재밌게 단어를 외워보세요!
        </p>
        <ul className="my-10 grid grid-rows-3 sm:grid-cols-2">
          {wordsBooks.map((book, index) => (
            <li
              key={index}
              className={`shadow-drop relative m-2 cursor-pointer rounded border-2 border-muted-foreground bg-primary-foreground p-4 text-lg text-primary shadow-muted-foreground transition-all before:absolute before:right-2 before:top-2 before:h-3 before:w-3 before:bg-white after:absolute after:right-3 after:top-3 after:h-3 after:w-3 after:bg-primary-foreground hover:translate-y-2 hover:shadow-none sm:p-5 ${index === 4 && 'sm:col-start-1 sm:col-end-3'}`}
            >
              {book}
            </li>
          ))}
        </ul>
      </PageLayout>
    </Suspense>
  )
}
