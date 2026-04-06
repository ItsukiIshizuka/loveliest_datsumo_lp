'use client'

import { useEffect, useState } from 'react'
import { MapPin, Phone } from 'lucide-react'

const HOTPEPPER_URL = 'https://beauty.hotpepper.jp/kr/slnH000481060/coupon/#:~:text=%E3%81%A6%E4%BA%88%E7%B4%84%E3%81%99%E3%82%8B-%2C%E8%84%B1%E6%AF%9B%2C-%E3%80%90%E3%81%96%E3%81%A3%E3%81%8F%E3%82%8A%E5%88%86%E3%81%91%E5%A4%A7%E7%9B%A4%E6%8C%AF%E3%82%8B%E8%88%9E%E3%81%84'

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

        {/* Right: access + tel + 予約 */}
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
            href="#access"
            className="inline-flex items-center gap-1 sm:gap-1.5 bg-white/70 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-foreground text-xs sm:text-sm font-body font-medium px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full shadow-sm transition-colors whitespace-nowrap"
            aria-label="アクセスへ"
          >
            <MapPin className="size-3 sm:size-3.5 shrink-0" aria-hidden />
            <span>アクセス</span>
          </a>
          <a
            href={HOTPEPPER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-1 sm:gap-1.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary text-xs sm:text-sm font-body font-semibold px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-sm shadow-primary/10 whitespace-nowrap"
            aria-label="ホットペッパーで予約する（新しいタブで開きます）"
          >
            <svg viewBox="0 0 24 24" className="size-3.5 sm:size-4 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
            </svg>
            <span>ネット予約</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
