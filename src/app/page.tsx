import Particle from '@/components/common/particle'
import PageLayout from '@/components/layout/pageLayout'
import PointerCircle from '@/components/layout/pointerCircle'

export default function Home() {
  return (
    <PageLayout className="cursor-default text-2xl">
      <p>일본어 공부를 재밌게 !</p>
      <p>tomo와 함께 일본어 단어를 쉽게 배워요.</p>
      <PointerCircle />
      <Particle />
    </PageLayout>
  )
}
