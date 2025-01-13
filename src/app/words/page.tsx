import PageLayout from '@/components/layout/pageLayout'
import TypographyH2 from '@/components/layout/typographyH2'
import { levels } from '@/constants/words'
import Link from 'next/link'

export default function WordsPage() {
  return (
    <PageLayout>
      <TypographyH2>- 단어장 -</TypographyH2>
      <p className="mt-4 text-center">
        수준별 단어장으로 맞춤형 학습을 진행할 수 있습니다.
      </p>
      <p className="text-center">
        단어 카드를 넘기며 재밌게 단어를 외워보세요!
      </p>
      <ul className="m-auto my-10 grid max-w-5xl grid-cols-1 sm:grid-cols-2">
        {levels.map((level, index) => (
          <li
            key={index}
            className={`${index === levels.length - 1 ? 'sm:col-span-2' : ''}`}
          >
            <Link
              className="relative m-2 block cursor-pointer rounded border-2 border-muted-foreground bg-primary-foreground p-4 text-lg text-primary shadow-drop shadow-muted-foreground transition-all before:absolute before:right-2 before:top-2 before:h-3 before:w-3 before:bg-white after:absolute after:right-3 after:top-3 after:h-3 after:w-3 after:bg-primary-foreground hover:translate-y-2 hover:shadow-none sm:p-5"
              href={`/words/${level}`}
            >
              {level}
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  )
}
