import { Phone } from 'lucide-react'
import Image from 'next/image'
import BookingButton from '@/components/BookingButton'

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
          <BookingButton className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm sm:text-lg px-8 py-4 rounded-full w-full sm:w-auto shadow-md shadow-primary/10 whitespace-nowrap">
            <svg viewBox="0 0 24 24" className="size-6 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
            </svg>
            ネット予約（ホットペッパー）
          </BookingButton>
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
