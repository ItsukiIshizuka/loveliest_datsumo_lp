import { Phone } from 'lucide-react'
import Image from 'next/image'

const LINE_URL = '#' // TODO: 実際のLINE URLに差し替え

const HERO_IMAGE_SRC = '/images/hero-main.png'
const HERO_IMAGE_SP_SRC = '/images/hero-sp.png'

const features = ['全身 約1時間', '都度払い・縛りなし', '完全個室', '子連れ相談可']

export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex items-center overflow-hidden"
      aria-label="ファーストビュー"
    >
      {/* 背景画像: SP用縦長 / PC用横長 */}
      <Image
        src={HERO_IMAGE_SP_SRC}
        alt="Loveliestの施術シーン・美肌イメージ"
        fill
        sizes="(min-width: 1024px) 1px, 100vw"
        className="object-cover object-center lg:hidden"
        quality={90}
        priority
      />
      <Image
        src={HERO_IMAGE_SRC}
        alt=""
        fill
        sizes="(max-width: 1023px) 1px, 100vw"
        className="object-cover object-center hidden lg:block"
        quality={90}
        priority
      />

      {/* テキスト可読性のためのオーバーレイ（左側を暗く） */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(255,245,247,0.82) 0%, rgba(255,245,247,0.65) 40%, rgba(255,245,247,0.15) 75%, transparent 100%)',
        }}
        aria-hidden
      />

      {/* テキストコンテンツ */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-6 sm:px-10 lg:px-14 xl:px-20 py-24 lg:py-32">
        {/* バッジ */}
        <p className="hero-tag inline-flex items-center gap-2.5 font-body text-[11px] tracking-[0.2em] uppercase text-primary mb-7">
          <span className="block h-px w-6 bg-primary shrink-0" aria-hidden />
          <span className="whitespace-nowrap">千葉・我孫子 — プライベートビューティーサロン</span>
          <span className="block h-px w-6 bg-primary shrink-0" aria-hidden />
        </p>

        {/* H1 */}
        <h1 className="hero-title font-display text-[2.6rem] sm:text-[3.4rem] lg:text-[3rem] xl:text-[3.6rem] leading-[1.25] tracking-tight text-foreground mb-6">
          <span className="block">
            <span className="whitespace-nowrap">高い・</span>
            <span className="whitespace-nowrap">痛い・</span>
            <span className="whitespace-nowrap">時間がかかる。</span>
          </span>
          <span className="block text-primary">
            <span className="whitespace-nowrap">その悩み、</span>
            <span className="whitespace-nowrap">解決します。</span>
          </span>
        </h1>

        {/* サブコピー */}
        <p className="hero-sub font-body text-base sm:text-lg text-muted-foreground leading-[1.9] mb-4">
          <span className="whitespace-nowrap">Loveliestは、</span>
          <span className="whitespace-nowrap">我孫子市のプライベートサロン。</span>
          <span className="whitespace-nowrap">医療脱毛に近い効果の<strong className="text-foreground font-medium">LED脱毛</strong>を、</span>
          <span className="whitespace-nowrap"><strong className="text-foreground font-medium">都度払い</strong>でご提供。</span>
          <span className="whitespace-nowrap">回数券なし・</span>
          <span className="whitespace-nowrap">縛りなし。</span>
          <span className="whitespace-nowrap">ご自身のペースで通えます。</span>
        </p>

        {/* 特徴ピル */}
        <div className="hero-sub flex flex-wrap gap-2 mb-10">
          {features.map((f) => (
            <span
              key={f}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-body font-medium bg-white/75 border border-primary/25 text-foreground shadow-sm"
            >
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="hero-cta flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <a
            href={LINE_URL}
            className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm sm:text-lg px-8 py-4 rounded-full w-full sm:w-auto shadow-md shadow-primary/10 whitespace-nowrap"
            aria-label="LINEで無料カウンセリングを予約する"
          >
            {/* LINE公式SVGロゴ */}
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 shrink-0 fill-primary"
              aria-label="LINE"
            >
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M12 0C5.373 0 0 4.973 0 11.096c0 5.461 4.252 10.015 9.999 10.938.391.075.924.232 1.057.534.12.273.079.699.038.975l-.163 1.001c-.045.346-.29 1.332 1.062.727 1.351-.604 7.269-4.28 9.911-7.337C23.147 15.396 24 13.322 24 11.096 24 4.973 18.627 0 12 0" />
            </svg>
            LINEで無料カウンセリング予約
          </a>
          <a
            href="tel:08025628508"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body sm:self-center"
            aria-label="電話で問い合わせ: 080-2562-8508"
          >
            <Phone className="size-4" aria-hidden />
            080-2562-8508
          </a>
        </div>

        {/* 社会的証明 */}
        <div className="hero-social mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-body text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span
              className="flex gap-0.5 text-[var(--gold-accent)]"
              aria-label="星5"
            >
              ★★★★★
            </span>
            <span>Google口コミ 5.0</span>
          </div>
          <span className="hidden sm:block w-px h-4 bg-border" aria-hidden />
          <span>📍 JR我孫子駅 徒歩15分</span>
          <span className="hidden sm:block w-px h-4 bg-border" aria-hidden />
          <span>🌸 初回体験メニューあり</span>
        </div>
      </div>
    </section>
  )
}
