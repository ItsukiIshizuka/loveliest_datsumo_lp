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
            className="btn-cta inline-flex items-center gap-1.5 bg-[#06C755] text-white text-sm font-body font-medium px-4 py-2 rounded-full hover:bg-[#05b34d] active:bg-[#049d44]"
            aria-label="LINEで予約"
          >
            {/* Simple LINE "L" logotype substitute */}
            <span className="font-bold text-base leading-none" aria-hidden>
              L
            </span>
            <span>LINE で予約</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
