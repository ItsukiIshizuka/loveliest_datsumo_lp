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
            className="btn-cta btn-cta-hero inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm sm:text-lg px-10 py-5 rounded-full w-full sm:w-auto shadow-md shadow-primary/10 whitespace-nowrap"
            aria-label="LINEで無料カウンセリングを予約する"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-6 shrink-0 fill-primary" aria-label="LINE">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M12 0C5.373 0 0 4.973 0 11.096c0 5.461 4.252 10.015 9.999 10.938.391.075.924.232 1.057.534.12.273.079.699.038.975l-.163 1.001c-.045.346-.29 1.332 1.062.727 1.351-.604 7.269-4.28 9.911-7.337C23.147 15.396 24 13.322 24 11.096 24 4.973 18.627 0 12 0" />
            </svg>
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
