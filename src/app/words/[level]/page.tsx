type WordsByLevelPageProps = {
  params: Promise<{ level: string }>
}
import Error from '@/app/error'
import PageLayout from '@/components/layout/pageLayout'
import TypographyH2 from '@/components/layout/typographyH2'
import { levels } from '@/constants/words'
export default async function WordsByLevelPage({
  params,
}: WordsByLevelPageProps) {
  const level = (await params).level
  const categoryArray = [
    '자연',
    '문화',
    '철학',
    '기술',
    '경제',
    '사회',
    '정치',
    '과학',
    '문학',
    '예술',
  ]
  return levels.includes(level) ? (
    <PageLayout>
      <TypographyH2>{level} 단어장</TypographyH2>
      <p className="mt-4 text-center">
        {level} 수준의 단어를 카테고리별로 학습합니다.
      </p>
      <ul className="mx-auto mt-10 grid w-3/5 max-w-[600px] grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-5">
        {categoryArray.map((category, index) => (
          <li
            key={index}
            className="relative mb-5 w-fit cursor-pointer rounded border-2 border-muted-foreground bg-primary-foreground p-5 text-primary shadow-drop transition-all before:absolute before:right-2 before:top-2 before:h-3 before:w-3 before:bg-white after:absolute after:right-3 after:top-3 after:h-3 after:w-3 after:bg-primary-foreground hover:translate-y-2 hover:shadow-none"
          >
            {category}
          </li>
        ))}
      </ul>
    </PageLayout>
  ) : (
    <Error />
  )
}
