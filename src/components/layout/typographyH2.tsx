import { ReactNode } from 'react'

type TypographyH2Props = {
  children: ReactNode
}

export default function TypographyH2({ children }: TypographyH2Props) {
  return <h2 className="text-center text-3xl font-bold">{children}</h2>
}
