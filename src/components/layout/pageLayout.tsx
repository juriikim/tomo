import { ReactNode } from 'react'

type PageLayoutProps = {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className="m-auto px-4 py-10">{children}</div>
}
