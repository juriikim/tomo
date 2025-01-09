import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return <div className="my-32 px-4">{children}</div>;
}
