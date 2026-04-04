import { Phone } from 'lucide-react'

const LINE_URL = '#' // TODO: 実際のLINE URLに差し替え

const features = ['全身 約1時間', '都度払い・縛りなし', '完全個室', '子連れ相談可']

export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col justify-center pt-20 pb-28 overflow-hidden"
      aria-label="ファーストビュー"
      style={{
        background:
          'linear-gradient(155deg, var(--pearl) 0%, var(--blush) 55%, oklch(0.93 0.022 10) 100%)',
      }}
    >
      {/* 装飾円 */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 size-[28rem] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, var(--blush), transparent 68%)',
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-20 size-80 rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, var(--primary), transparent 70%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        {/* バッジ */}
        <p className="hero-tag inline-flex items-center gap-2.5 font-body text-[11px] tracking-[0.2em] uppercase text-primary mb-7">
          <span className="block h-px w-6 bg-primary" aria-hidden />
          千葉・我孫子 — プライベートビューティーサロン
          <span className="block h-px w-6 bg-primary" aria-hidden />
        </p>

        {/* H1 */}
        <h1 className="hero-title font-display text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.25] tracking-tight text-foreground mb-6">
          高い・痛い・
          <wbr />
          時間がかかる。
          <br />
          <span className="text-primary">その悩み、</span>
          <br className="hidden sm:block" />
          <span className="text-primary">解決します。</span>
        </h1>

        {/* サブコピー */}
        <p className="hero-sub font-body text-base sm:text-lg text-muted-foreground leading-[1.9] mb-4 max-w-xl mx-auto">
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
        <div className="hero-sub flex flex-wrap justify-center gap-2 mb-10">
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
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
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
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            aria-label="電話で問い合わせ: 080-2562-8508"
          >
            <Phone className="size-4" aria-hidden />
            080-2562-8508
          </a>
        </div>

        {/* 社会的証明 */}
        <div className="hero-social mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-body text-muted-foreground">
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
