import Header from "@/app/_components/Header";
import type { Metadata } from "next";
import { Radio_Canada } from "next/font/google";

const radioCan = Radio_Canada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop",
  description: "Courses list to be purchased",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={radioCan.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
