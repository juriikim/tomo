import { chapterList } from '@/constants/wordbook'
import { Word } from '@/types/wordbookTypes'

export const getWords = async (
  level?: number,
  chapter?: number,
  random?: number
): Promise<Word[]> => {
  if (level && chapter) {
    const res = await fetch(
      `${process.env.API_URL}/api/words?level=${level + 1}&chapter=${chapterList[level][chapter]}`,
      {
        method: 'GET',
      }
    )
    const data: Word[] = await res.json()
    return data
  } else if (random) {
    const res = await fetch(
      `${process.env.API_URL}/api/words?random=${random}`,
      {
        method: 'GET',
      }
    )
    const data: Word[] = await res.json()
    return data
  } else {
    return []
  }
}
