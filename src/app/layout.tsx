import type { Metadata } from "next";
import { Nanum_Gothic } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "xiondi",
  description: "study chinese",
  icons: [
    {
      url: "logoIcon.svg",
      rel: "icon",
    },
  ],
};

const NanumGothic = Nanum_Gothic({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NanumGothic.className} antialiased flex flex-col`}>
        <Header />
        <main className="max-w-screen-xl w-screen m-auto grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
