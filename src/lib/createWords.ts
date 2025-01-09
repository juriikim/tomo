import { Word } from '@/types/wordbookTypes'

export const createWords = async (words: Word[]) => {
  const res = await fetch(`${process.env.API_URL}/api/words`, {
    method: 'POST',
    body: JSON.stringify(words),
    headers: { 'Content-Type': 'application/json' },
  })
  const data = await res.json()
  console.log(data)
}
