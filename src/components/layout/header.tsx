import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-14 w-full bg-background text-sm shadow-md sm:text-lg">
      <nav className="m-auto flex max-w-screen-2xl items-center justify-between px-4 py-2">
        <Link href={'/'}>
          <Image
            src="/titleLogo.svg"
            width={80}
            height={100}
            alt="logo"
            className="w-16 sm:w-20"
          />
        </Link>
        <ul className="ml-10 flex grow gap-4">
          <li className="cursor-pointer pt-1 transition-all duration-300">
            <Link href={'/words'}>단어장</Link>
          </li>
        </ul>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/signin">
            <Button variant="outline" size="sm" className="text-xs sm:text-sm">
              로그인
            </Button>
          </Link>
          <Link href="signup">
            <Button size="sm" className="text-xs sm:text-sm">
              회원 가입
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
