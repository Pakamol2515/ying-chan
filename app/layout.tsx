import type { Metadata } from "next";
import { Noto_Sans_Thai, Prompt } from "next/font/google";
import "./globals.css";

const body = Noto_Sans_Thai({
  variable: "--font-body",
  subsets: ["thai", "latin"],
});

const heading = Prompt({
  variable: "--font-heading",
  subsets: ["thai", "latin"],
  weight: ["500", "600", "700"],
});

const title = "มีสุข | อาหารเพื่อสุขภาพ สด สะอาด ปลอดภัย";
const description =
  "อาหารเพื่อสุขภาพจากร้านมีสุข เมืองทอง ปลอดภัย สะอาด ครบสารอาหาร สั่งง่ายทางไลน์ เปิดทุกวัน 08.00–18.00 น.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "มีสุข",
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${body.variable} ${heading.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
