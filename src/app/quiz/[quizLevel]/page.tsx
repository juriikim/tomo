import PageLayout from '@/components/layout/pageLayout'
import TypographyH2 from '@/components/layout/typographyH2'
import { getWords } from '@/lib/getWords'
import { Word } from '@/types/wordbookTypes'

type QuizWordBookProps = {
  params: Promise<{ quizLevel: string }>
  searchParams: Promise<{ length: string }>
}

export default async function QuizWordBook({
  params,
  searchParams,
}: QuizWordBookProps) {
  const quizLevel = (await params).quizLevel
  const quizLength = +(await searchParams).length
  const quizList: Word[][] = []

  if (quizLength > 0 && quizLength <= 20) {
    for (let i = 0; i < quizLength; i++) {
      const data = await getWords(undefined, undefined, 4)
      quizList.push(data)
      console.log(data)
    }
  }

  return quizLevel ? (
    <PageLayout>
      <TypographyH2>{decodeURIComponent(quizLevel)} 퀴즈</TypographyH2>
      <ul className="my-10 grid grid-cols-1 grid-rows-3 gap-4 rounded-md border px-4 py-10 md:grid-cols-2">
        {quizList.map((quiz: Word[], index) => (
          <div key={index}>{quiz[0].word}</div>
        ))}
      </ul>
    </PageLayout>
  ) : (
    <PageLayout>Wordbook not found</PageLayout>
  )
}
