type WordInfoProps = {
  example: {
    sentence: string
    pinyin: string
    mean: string
  }
  hanja: {
    char: string
    mean: string
    composition: { char: string; mean: string }[] | []
  }[]
}

export default function WordInfo({ example, hanja }: WordInfoProps) {
  return (
    <ul className="my-10 ml-10 flex flex-col gap-4">
      <li>
        <strong>예문</strong>
        <p>{example.sentence}</p>
        <p className="text-sm text-gray-500">[{example.pinyin}]</p>
        <p>{example.mean}</p>
      </li>
      <li>
        <strong>한자</strong>
        {hanja.map((character, index) => (
          <div key={index} className="flex items-end gap-4">
            <p>
              {character.char}{' '}
              <span className="text-gray-500">{character.mean}</span>
            </p>
            {character.composition.length > 0 &&
              character.composition.map((composition, index) => (
                <p key={index} className="mx-1 text-xs">
                  {composition.char}
                  <span className="text-gray-500">{composition.mean}</span>
                </p>
              ))}
          </div>
        ))}
      </li>
    </ul>
  )
}
