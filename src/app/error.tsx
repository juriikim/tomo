'use client'

import PageLayout from '@/components/layout/pageLayout'
import TypographyH2 from '@/components/layout/typographyH2'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Error() {
  return (
    <PageLayout className="flex flex-col items-center">
      <TypographyH2>404 Not Found </TypographyH2>
      <strong className="mb-10 mt-4 text-xl">
        페이지가 존재하지 않습니다.
      </strong>
      <Link href={'/'}>
        <Button className="shadow-drop transition-all hover:translate-y-2 hover:shadow-none">
          메인페이지로
        </Button>
      </Link>
    </PageLayout>
  )
}
