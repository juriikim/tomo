type WordCardProps = {
  word: string;
  pinyin: string;
  translation: string;
  width?: "sm" | "md" | "lg";
};

export default function WordCard({
  word,
  pinyin,
  translation,
  width = "md",
}: WordCardProps) {
  const widthClasses = {
    sm: "w-32",
    md: "w-48",
    lg: "w-64",
  };
  return (
    <div
      className={`${widthClasses[width]} flex-shrink-0 bg-white border py-10 px-4 my-10 rounded-md flex flex-col justify-center items-center`}
    >
      <strong className="text-2xl">{word}</strong>
      <p className="text-sm text-gray-500 mt-2 mb-4">[{pinyin}]</p>
      <p>{translation}</p>
    </div>
  );
}
