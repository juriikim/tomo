'use client'

import PageLayout from '@/components/layout/pageLayout'
import TypographyH2 from '@/components/layout/typographyH2'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { quizLevels } from '@/constants/quiz'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Quiz() {
  const router = useRouter()
  const [quizLevel, setQuizLevel] = useState('')
  const [quizLength, setQuizLenth] = useState(0)

  const handleSubmit = () => {
    if (quizLength > 0 && quizLength <= 20 && quizLevels.includes(quizLevel)) {
      router.push(`/quiz/${quizLevel}?length=${quizLength}`)
    }
  }

  return (
    <PageLayout>
      <TypographyH2>퀴즈</TypographyH2>
      <div className="flex flex-col">
        <ul className="mb-14 mt-24 flex justify-center gap-10">
          {quizLevels.map((level, index) => (
            <li
              key={index}
              className={`flex h-[calc(15vw)] w-1/5 cursor-pointer items-center justify-center rounded-md bg-secondary-foreground transition-all hover:brightness-105 ${quizLevel === level && 'brightness-105'}`}
              onClick={() => setQuizLevel(level)}
            >
              <p>{level}</p>
            </li>
          ))}
        </ul>
        <div className="m-auto flex w-72 flex-col gap-3">
          <Input
            placeholder="풀 문제 개수를 입력해주세요."
            type="number"
            onChange={(e) => {
              setQuizLenth(Number(e.target.value))
            }}
          ></Input>
          <Button onClick={handleSubmit}>퀴즈 시작</Button>
        </div>
      </div>
    </PageLayout>
  )
}
