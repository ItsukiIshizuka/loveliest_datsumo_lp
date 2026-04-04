import { Phone } from 'lucide-react'
import Image from 'next/image'

const LINE_URL = '#' // TODO: 実際のLINE URLに差し替え

// TODO: 実画像が支給されたら差し替え
const HERO_IMAGE_SRC = '/images/hero-main.jpg'

const features = ['全身 約1時間', '都度払い・縛りなし', '完全個室', '子連れ相談可']

export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col lg:flex-row items-stretch overflow-hidden"
      aria-label="ファーストビュー"
      style={{
        background:
          'linear-gradient(155deg, var(--pearl) 0%, var(--blush) 55%, oklch(0.93 0.022 10) 100%)',
      }}
    >
      {/* 装飾円 */}
      <div
        className="pointer-events-none absolute -top-32 -left-24 size-[22rem] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, var(--blush), transparent 68%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-20 size-72 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, var(--primary), transparent 70%)' }}
        aria-hidden
      />

      {/* ─── SP: 画像（上）/ PC: 右カラム ─── */}
      <div
        className="relative order-1 lg:order-2 w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto"
      >
        {/*
          TODO: 実画像支給後、この div をコメントアウトし下の <Image> を有効化
          <Image
            src={HERO_IMAGE_SRC}
            alt="Loveliestの施術シーン・美肌イメージ"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        */}
        {/* ── プレースホルダー（実画像支給後に削除） ── */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{
            background:
              'linear-gradient(145deg, var(--blush) 0%, oklch(0.89 0.035 5) 60%, oklch(0.84 0.04 355) 100%)',
          }}
          aria-hidden
        >
          <span className="text-5xl">🌸</span>
          <p className="font-body text-sm text-primary/70 tracking-wide">施術写真・ビフォーアフター</p>
          <p className="font-body text-xs text-primary/50">（画像支給後に差し替え）</p>
        </div>

        {/* PC時: 左端をテキスト背景となじませるフェード */}
        <div
          className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, oklch(0.95 0.016 10), transparent)' }}
          aria-hidden
        />
      </div>

      {/* ─── SP: テキスト（下）/ PC: 左カラム ─── */}
      <div className="relative z-10 flex flex-col justify-center order-2 lg:order-1 lg:w-1/2 px-6 sm:px-10 lg:px-14 xl:px-20 pt-10 pb-16 lg:py-24">
        {/* バッジ */}
        <p className="hero-tag inline-flex items-center gap-2.5 font-body text-[11px] tracking-[0.2em] uppercase text-primary mb-7">
          <span className="block h-px w-6 bg-primary" aria-hidden />
          千葉・我孫子 — プライベートビューティーサロン
          <span className="block h-px w-6 bg-primary" aria-hidden />
        </p>

        {/* H1 */}
        <h1 className="hero-title font-display text-[2.6rem] sm:text-[3.4rem] lg:text-[3rem] xl:text-[3.6rem] leading-[1.25] tracking-tight text-foreground mb-6">
          高い・痛い・
          <wbr />
          時間がかかる。
          <br />
          <span className="text-primary">その悩み、</span>
          <br />
          <span className="text-primary">解決します。</span>
        </h1>

        {/* サブコピー */}
        <p className="hero-sub font-body text-base sm:text-lg text-muted-foreground leading-[1.9] mb-4">
          Loveliestは、我孫子市のプライベートサロン。
          <br />
          医療脱毛に近い効果の
          <strong className="text-foreground font-medium">LED脱毛</strong>
          を、
          <strong className="text-foreground font-medium">都度払い</strong>
          でご提供。
          <br />
          回数券なし・縛りなし。ご自身のペースで通えます。
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
            className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-[1.05rem] sm:text-lg px-8 py-4 rounded-full w-full sm:w-auto shadow-md shadow-primary/10"
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
