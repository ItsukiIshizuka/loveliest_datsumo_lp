import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LED脱毛 千葉・我孫子 | Loveliest（ラブリエスト）",
  description:
    "千葉県我孫子市のトータルビューティーサロン Loveliest（ラブリエスト）。痛みが少なく肌にやさしいLED脱毛を都度払いでご利用いただけます。無料カウンセリング実施中。LINEから24時間ご予約可能。",
  keywords: [
    "LED脱毛",
    "我孫子",
    "千葉",
    "脱毛",
    "都度払い",
    "痛みが少ない",
    "トータルビューティー",
    "サロン",
  ],
  openGraph: {
    title: "LED脱毛 千葉・我孫子 | Loveliest",
    description:
      "痛みが少なく肌にやさしいLED脱毛。都度払いで気軽にはじめられます。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJP.variable} ${notoSansJP.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
