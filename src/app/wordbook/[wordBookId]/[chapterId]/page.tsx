import PageLayout from '@/components/layout/pageLayout'
import TypographyH2 from '@/components/layout/typographyH2'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import WordCard from './wordCard'
import WordInfo from './wordInfo'
import { getWords } from '@/lib/getWords'

type ChapterPageProps = {
  params: Promise<{ wordBookId: string; chapterId: string }>
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const wordBookId = (await params).wordBookId
  const chapterId = (await params).chapterId
  const words = await getWords(+wordBookId, +chapterId)
  return (
    <PageLayout>
      <TypographyH2>단어장 - 챕터</TypographyH2>
      <div className="my-10 rounded-md border px-4 py-10">
        <Carousel>
          <CarouselContent>
            {words.map((word, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <WordCard
                  word={word.word}
                  pinyin={word.pinyin}
                  translation={word.translation}
                />
                <WordInfo example={word.example} hanja={word.hanja} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </PageLayout>
  )
}
