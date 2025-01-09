export type Level = 1 | 2 | 3 | 4 | 5 | 6

export type Word = {
  wordId: number
  word: string
  pinyin: string
  translation: string
  example: {
    sentence: string
    pinyin: string
    mean: string
  }
  hanja: {
    char: string
    mean: string
    composition: {
      char: string
      mean: string
    }[]
  }[]
  level: number
  chapter: string
  isActive: boolean
}

export type Chapter = {
  wordBookId: number
  chapterId: number
  chapter: string
  chapterDescription: string
  chapterLength: number
}

export type WordBook = {
  wordBookId: number
  wordBookTitle: string
  wordBookDescription: string
  wordBookLength: number
  chapterList: Chapter[]
}
