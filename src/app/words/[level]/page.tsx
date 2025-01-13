type WordsByLevelPageProps = {
  params: Promise<{ level: string }>
}

export default async function WordsByLevelPage({
  params,
}: WordsByLevelPageProps) {
  const level = (await params).level
  console.log(level)
  return <div></div>
}
