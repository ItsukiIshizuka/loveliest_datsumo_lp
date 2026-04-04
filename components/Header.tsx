'use client'

import { useEffect, useState } from 'react'
import { Phone } from 'lucide-react'

const LINE_URL = '#' // TODO: 実際のLINE URLに差し替え

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 48)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={[
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_12px_rgb(0,0,0,0.06)]'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex flex-col leading-none select-none">
          <span className="font-elegant text-[1.6rem] tracking-widest text-primary italic">
            Loveliest
          </span>
          <span className="font-body text-[9px] tracking-[0.22em] text-muted-foreground uppercase mt-0.5">
            LED 脱毛 / 我孫子
          </span>
        </div>

        {/* Right: tel + LINE */}
        <nav className="flex items-center gap-3">
          <a
            href="tel:08025628508"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            aria-label="電話で問い合わせ: 080-2562-8508"
          >
            <Phone className="size-3.5 shrink-0" aria-hidden />
            <span>080-2562-8508</span>
          </a>
          <a
            href={LINE_URL}
            className="btn-cta inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary text-sm font-body font-semibold px-4 py-2 rounded-full shadow-sm shadow-primary/10"
            aria-label="LINEで予約"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4 shrink-0 fill-primary" aria-label="LINE">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M12 0C5.373 0 0 4.973 0 11.096c0 5.461 4.252 10.015 9.999 10.938.391.075.924.232 1.057.534.12.273.079.699.038.975l-.163 1.001c-.045.346-.29 1.332 1.062.727 1.351-.604 7.269-4.28 9.911-7.337C23.147 15.396 24 13.322 24 11.096 24 4.973 18.627 0 12 0" />
            </svg>
            <span>LINE で予約</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
