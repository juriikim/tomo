'use client'
import { Chapter } from '@/types/wordbookTypes'
import { useRouter, usePathname } from 'next/navigation'
type ChapterItemProps = {
  chapter: Chapter
}

export default function ChapterItem({ chapter }: ChapterItemProps) {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <li
      onClick={() => router.push(`${pathname}/${chapter.chapterId}`)}
      className="cursor-pointer rounded-md border p-4 transition-all hover:shadow-md"
    >
      <strong>{chapter.chapter}</strong>
      <p>{chapter.chapterDescription}</p>
      <p>
        어휘량: <span>{chapter.chapterLength}</span>단어
      </p>
    </li>
  )
}
