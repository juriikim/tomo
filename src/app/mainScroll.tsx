'use client'
import { useInView } from 'react-intersection-observer'
import WordCard from './wordbook/[wordBookId]/[chapterId]/wordCard'
import WordInfo from './wordbook/[wordBookId]/[chapterId]/wordInfo'
import { Star } from 'lucide-react'

export default function MainScroll() {
  const textContents = [
    '중국어 학습을 쉽고 재미있게!\n지금 바로 시작해서 나만의 맞춤 학습 경험을 만들어보세요!',
    '재미있는 퀴즈와 랭킹 시스템으로 단어 학습을 게임처럼 즐기고,\n실력을 쑥쑥 키워보세요!',
    '실생활에 기반한 회화 학습으로,\n단어 암기를 넘어 실전에서 바로 써먹는 중국어를 배워보세요!',
    '다시 보고 싶은 단어는 체크해두고,\n효율적으로 복습하며 기억에 오래 남길 수 있습니다!',
  ]

  return (
    <div className="mx-20">
      <Section1 text={textContents[0]} />
      <Section2 text={textContents[1]} />
      <Section3 text={textContents[2]} />
      <Section4 text={textContents[3]} />
    </div>
  )
}

const Section1 = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  })

  return (
    <div className="flex h-screen flex-col items-center justify-center py-20">
      <strong
        ref={ref}
        className={`whitespace-pre-wrap font-sans text-3xl leading-normal transition-all duration-500 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {text}
      </strong>
      <div ref={ref2} className="relative mt-10 w-4/5 overflow-hidden">
        <div className="absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent" />
        <div
          className={`flex gap-5 transition-all duration-1000 ease-in-out ${
            inView2 ? '-translate-x-52' : '-translate-x-10'
          }`}
        >
          <WordCard word={'단어'} pinyin={'병음'} translation={'번역'} />
          <WordCard word={'단어'} pinyin={'병음'} translation={'번역'} />
          <WordCard word={'단어'} pinyin={'병음'} translation={'번역'} />
          <WordCard word={'단어'} pinyin={'병음'} translation={'번역'} />
          <WordCard word={'단어'} pinyin={'병음'} translation={'번역'} />
          <WordCard word={'단어'} pinyin={'병음'} translation={'번역'} />
        </div>
        <div className="absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}

const Section2 = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  })

  return (
    <div className="relative flex h-screen flex-col items-center justify-center py-20">
      <strong
        ref={ref}
        className={`-translate-y-10 whitespace-pre-wrap font-sans text-3xl leading-normal transition-all duration-500 ${
          inView ? 'translate-y-0 opacity-100' : 'opacity-0'
        }`}
      >
        {text}
      </strong>
      <div
        ref={ref2}
        className={`mt-10 -translate-y-24 rounded-md border px-72 py-10 transition-all duration-700 ${inView2 ? 'translate-y-0 opacity-100' : 'opacity-0'}`}
      >
        <p className="text-center text-2xl">面条</p>
        <p className="pb-10 text-center text-gray-500">[miàn tiáo]</p>
        <ul className="grid grid-cols-2 grid-rows-2 gap-10">
          <li className="rounded bg-secondary-foreground px-10 py-2">만두</li>
          <li className="rounded bg-secondary-foreground px-10 py-2">국수</li>
          <li className="rounded bg-secondary-foreground px-10 py-2">계란</li>
          <li className="rounded bg-secondary-foreground px-10 py-2">사과</li>
        </ul>
      </div>
      <div className="absolute bottom-0 z-10 mb-10 h-56 w-full bg-gradient-to-t from-white to-transparent" />
    </div>
  )
}

const Section3 = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  })
  const { ref: ref3, inView: inView3 } = useInView({
    threshold: 0.5,
  })
  const { ref: ref4, inView: inView4 } = useInView({
    threshold: 0.5,
  })
  return (
    <div className="flex h-screen flex-col items-center justify-center py-20">
      <strong
        ref={ref}
        className={`-translate-y-10 whitespace-pre-wrap font-sans text-3xl leading-normal transition-all duration-500 ${
          inView ? 'translate-y-0 opacity-100' : 'opacity-0'
        }`}
      >
        {text}
      </strong>
      <ul className="relative mt-20 w-3/5">
        <li
          ref={ref2}
          className={`my-5 w-fit rounded-xl bg-muted-foreground px-5 py-2 transition-all duration-700 ${inView2 ? 'opacity-100' : 'opacity-0'}`}
        >
          <p>你好！最近过得怎么样？</p>
          <p className="text-sm text-gray-500">
            [Nǐ hǎo! Zuìjìn guò dé zěnme yàng?]
          </p>
        </li>
        <li
          ref={ref3}
          className={`my-5 ml-auto w-fit rounded-xl bg-secondary-foreground px-5 py-2 transition-all delay-200 duration-700 ${inView3 ? 'opacity-100' : 'opacity-0'}`}
        >
          <p>很好，你呢？</p>
          <p className="text-sm text-gray-500">[Hěn hǎo, nǐ ne?]</p>
        </li>
        <li
          ref={ref4}
          className={`my-5 w-fit rounded-xl bg-muted-foreground px-5 py-2 transition-all delay-300 duration-700 ${inView4 ? 'opacity-100' : 'opacity-0'}`}
        >
          <p>我也很好，谢谢！</p>
          <p className="text-sm text-gray-500">[Wǒ yě hěn hǎo, xièxie!]</p>
        </li>
      </ul>
    </div>
  )
}

const Section4 = ({ text }: { text: string }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 0.5,
  })
  const example = {
    sentence: '我喜欢吃米饭。',
    pinyin: '[Wǒ xǐhuān chī mǐfàn.]',
    mean: '나는 밥을 좋아해요.',
  }
  const hanja = [
    {
      char: '米',
      mean: '쌀 미',
      composition: [],
    },
    {
      char: '饭',
      mean: '밥 반',
      composition: [
        {
          char: '饣',
          mean: '식사 식',
        },
        {
          char: '反',
          mean: '뒤집을 반',
        },
      ],
    },
  ]

  return (
    <div className="flex h-screen flex-col items-center justify-center py-20">
      <strong
        ref={ref}
        className={`-translate-y-10 whitespace-pre-wrap font-sans text-3xl leading-normal transition-all duration-500 ${
          inView ? 'translate-y-0 opacity-100' : 'opacity-0'
        }`}
      >
        {text}
      </strong>
      <div
        ref={ref2}
        className={`mt-10 flex gap-10 rounded border px-32 transition-all duration-500 ${inView2 ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="relative">
          <Star
            className="absolute right-3 top-14 animate-bounce duration-700"
            strokeWidth={1.5}
            size={20}
            fill="orange"
            stroke="orange"
          ></Star>
          <WordCard word="米饭" pinyin="mǐ fàn" translation="쌀밥"></WordCard>
        </div>
        <WordInfo example={example} hanja={hanja} />
      </div>
    </div>
  )
}
