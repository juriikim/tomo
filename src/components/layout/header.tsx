import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-background shadow-md">
      <nav className="m-auto flex max-w-screen-2xl items-center justify-between px-4 py-2">
        <Link href={'/'}>
          <Image src="/logo.svg" width={80} height={100} alt="logo" />
        </Link>
        <ul className="ml-10 hidden grow gap-4 md:flex">
          <li className="cursor-pointer px-2 transition-all duration-300">
            <Link href={'/wordbook'}>단어장</Link>
          </li>
          <li className="cursor-pointer px-2 transition-all duration-300">
            <Link href={'/quiz'}>단어 퀴즈</Link>
          </li>
          <li className="cursor-pointer px-2 transition-all duration-300">
            <Link href={'/sentence'}>실전 회화</Link>
          </li>
        </ul>
        <div className="ml-auto hidden items-center gap-4 md:flex">
          <Button variant="outline" size="sm">
            로그인
          </Button>
          <Button size="sm">회원 가입</Button>
        </div>
        <AlignJustify className="cursor-pointer md:hidden" />
      </nav>
    </header>
  )
}
