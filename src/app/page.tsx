import Particle from '@/components/common/particle'
import PageLayout from '@/components/layout/pageLayout'
import PointerCircle from '@/components/layout/pointerCircle'
import ScrollCard from '@/components/common/scollCard'

export default function Home() {
  return (
    <PageLayout className="h-full cursor-default bg-primary-foreground text-xl font-bold leading-10 text-primary sm:text-5xl sm:leading-[70px]">
      <p className="shadow-black drop-shadow-md">일본어 공부를 재밌게 !</p>
      <p className="shadow-black drop-shadow-md">
        tomo와 함께 일본어 단어를 쉽게 배워요.
      </p>
      <PointerCircle />
      <Particle />
      <ScrollCard />
    </PageLayout>
  )
}
