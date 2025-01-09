import { ReactNode } from "react";

type TypographyH3Props = {
  children: ReactNode;
};

export default function TypographyH3({ children }: TypographyH3Props) {
  return <h3 className="text-2xl font-bold text-center">{children}</h3>;
}
