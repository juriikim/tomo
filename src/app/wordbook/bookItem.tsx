'use client'

import { WordBook } from '@/types/wordbookTypes'
import { useRouter } from 'next/navigation'

type BookItemProps = {
  wordBook: WordBook
}

export default function BookItem({ wordBook }: BookItemProps) {
  const router = useRouter()
  return (
    <li
      className="cursor-pointer rounded-md border p-4 transition-all hover:shadow-md"
      onClick={() => router.push(`/wordbook/${wordBook.wordBookId}`)}
    >
      <strong>{wordBook.wordBookTitle}</strong>
      <p>{wordBook.wordBookDescription}</p>
      <p>
        어휘량: <span>{wordBook.wordBookLength}</span>단어
      </p>
    </li>
  )
}
