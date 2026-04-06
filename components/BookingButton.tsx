'use client'

import { useState, useEffect, useCallback } from 'react'

const PARTIAL_URL = 'https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000481060&menuId=MN00000011004507&add=5'
const FULLBODY_URL = 'https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000481060&menuId=MN00000010703068&add=5'

const menus = [
  {
    label: '部分脱毛',
    labelEn: 'Partial',
    firstPrice: '¥4,900',
    regularPrice: '¥6,400',
    time: '約30分',
    url: PARTIAL_URL,
  },
  {
    label: '全身脱毛',
    labelEn: 'Full Body',
    firstPrice: '¥9,900',
    regularPrice: '¥11,400',
    time: '約1時間',
    url: FULLBODY_URL,
  },
] as const

export default function BookingButton({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close])

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        {children}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="ご予約メニューの選択"
        >
          <div
            className="bg-background rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ヘッダー */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border/40">
              <div>
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-0.5">
                  Reservation
                </p>
                <h2 className="font-display text-lg text-foreground">
                  メニューを選択
                </h2>
              </div>
              <button
                onClick={close}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="閉じる"
              >
                <svg viewBox="0 0 24 24" className="size-5 stroke-current fill-none stroke-2" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* メニュー選択肢 */}
            <div className="p-4 space-y-3">
              {menus.map((menu) => (
                <a
                  key={menu.label}
                  href={menu.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                  className="flex items-center justify-between w-full rounded-xl border border-primary/20 bg-secondary/40 hover:bg-secondary hover:border-primary/40 px-5 py-4 transition-all duration-200 group"
                  aria-label={`${menu.label}をホットペッパーで予約する（新しいタブで開きます）`}
                >
                  <div>
                    <p className="font-elegant text-xs tracking-widest text-muted-foreground italic mb-0.5">
                      {menu.labelEn}
                    </p>
                    <p className="font-display text-base text-foreground mb-2">
                      {menu.label}
                    </p>
                    <div className="space-y-0.5">
                      <p className="font-body text-xs text-muted-foreground">
                        初回 <span className="text-primary font-medium">{menu.firstPrice}</span>
                        <span className="text-muted-foreground/60 ml-1">（税込）</span>
                      </p>
                      <p className="font-body text-xs text-muted-foreground">
                        定価 <span className="font-medium">{menu.regularPrice}</span>
                        <span className="text-muted-foreground/60 ml-1">/ {menu.time}</span>
                      </p>
                    </div>
                  </div>
                  <svg viewBox="0 0 24 24" className="size-4 stroke-primary fill-none stroke-2 shrink-0 ml-3 group-hover:translate-x-0.5 transition-transform" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              ))}
            </div>

            <p className="font-body text-xs text-muted-foreground text-center pb-5 px-6">
              ホットペッパービューティーの予約画面へ移動します
            </p>
          </div>
        </div>
      )}
    </>
  )
}
