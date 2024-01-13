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
      <Header />
      <body className={radioCan.className}>{children}</body>
    </html>
  );
}
