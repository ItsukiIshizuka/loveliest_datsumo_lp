import { Phone } from 'lucide-react'

const HOTPEPPER_URL = 'https://beauty.hotpepper.jp/kr/slnH000481060/coupon/#:~:text=%E3%81%A6%E4%BA%88%E7%B4%84%E3%81%99%E3%82%8B-%2C%E8%84%B1%E6%AF%9B%2C-%E3%80%90%E3%81%96%E3%81%A3%E3%81%8F%E3%82%8A%E5%88%86%E3%81%91%E5%A4%A7%E7%9B%A4%E6%8C%AF%E3%82%8B%E8%88%9E%E3%81%84'

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
          <span className="whitespace-nowrap">ホットペッパーから</span>
          <span className="whitespace-nowrap">24時間いつでも予約できます。</span>
        </p>

        <div className="reveal reveal-stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={HOTPEPPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm sm:text-lg px-10 py-5 rounded-full w-full sm:w-auto shadow-md shadow-primary/10 whitespace-nowrap"
            aria-label="ホットペッパーで予約する（新しいタブで開きます）"
          >
            <svg viewBox="0 0 24 24" className="size-6 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
            </svg>
            ネット予約（ホットペッパー）
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
