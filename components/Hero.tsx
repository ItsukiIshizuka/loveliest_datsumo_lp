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
            className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-body font-semibold text-[1.05rem] sm:text-lg px-8 py-4 rounded-full w-full sm:w-auto shadow-lg shadow-[#06C755]/25"
            aria-label="LINEで無料カウンセリングを予約する"
          >
            <span className="font-bold text-xl leading-none" aria-hidden>
              L
            </span>
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
