import { ReactNode } from 'react'

type PageLayoutProps = {
  className?: string
  children: ReactNode
}

export default function PageLayout({ className, children }: PageLayoutProps) {
  return <div className={`m-auto px-4 py-10 ${className}`}>{children}</div>
}
