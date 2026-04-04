import { Phone } from 'lucide-react'

const LINE_URL = '#' // TODO: 実際のLINE URLに差し替え

export default function FinalCTA() {
  return (
    <section
      className="relative py-28 sm:py-36 overflow-hidden"
      style={{
        background:
          'linear-gradient(145deg, oklch(0.50 0.085 5) 0%, oklch(0.56 0.09 355) 100%)',
      }}
      aria-labelledby="final-cta-title"
    >
      {/* 装飾 */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 size-80 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, white, transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-6 text-center">
        <p className="reveal reveal-stagger-1 font-body text-[11px] tracking-[0.22em] uppercase text-white/70 mb-5">
          ご予約はこちら
        </p>

        <h2
          id="final-cta-title"
          className="reveal reveal-stagger-2 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-5 leading-[1.25]"
        >
          <span className="whitespace-nowrap">まずは、</span>
          <br className="sm:hidden" />
          <span className="whitespace-nowrap">無料カウンセリングへ。</span>
        </h2>

        <p className="reveal reveal-stagger-3 font-body text-base text-white/80 leading-relaxed mb-10 max-w-md mx-auto">
          <span className="whitespace-nowrap">「合うかどうか不安…」という方も大歓迎。</span>
          <br />
          <span className="whitespace-nowrap">カウンセリングだけでも、</span>
          <span className="whitespace-nowrap">お気軽にどうぞ。</span>
          <br />
          <span className="whitespace-nowrap">LINEからなら</span>
          <span className="whitespace-nowrap">24時間いつでも受け付けています。</span>
        </p>

        <div className="reveal reveal-stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={LINE_URL}
            className="btn-cta inline-flex items-center justify-center gap-2.5 bg-[#06C755] text-white font-body font-semibold text-lg px-10 py-5 rounded-full w-full sm:w-auto shadow-xl shadow-black/20 hover:bg-[#05b34d]"
            aria-label="LINEで無料カウンセリングを予約する"
          >
            <span className="font-bold text-2xl leading-none" aria-hidden>L</span>
            LINEで無料カウンセリング予約
          </a>
          <a
            href="tel:08025628508"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-body text-sm"
            aria-label="電話で問い合わせ: 080-2562-8508"
          >
            <Phone className="size-4" aria-hidden />
            080-2562-8508
          </a>
        </div>

        <p className="reveal reveal-stagger-4 font-body text-xs text-white/50 mt-8">
          ご不明な点はお気軽にご連絡ください。
        </p>
      </div>
    </section>
  )
}
