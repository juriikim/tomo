import { ReactNode } from "react";

type TypographyH1Props = {
  children: ReactNode;
};

export default function TypographyH1({ children }: TypographyH1Props) {
  return <h2 className="text-4xl font-bold text-center">{children}</h2>;
}
