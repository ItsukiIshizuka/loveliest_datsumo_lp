import { Phone, MapPin, Clock, Car } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const INSTAGRAM_URL = 'https://www.instagram.com/led_datsumo_loveliest_abiko'
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/t5yr2aNjqBoa9cnLA'
const HOTPEPPER_URL = 'https://beauty.hotpepper.jp/kr/slnH000481060/coupon/#:~:text=%E3%81%A6%E4%BA%88%E7%B4%84%E3%81%99%E3%82%8B-%2C%E8%84%B1%E6%AF%9B%2C-%E3%80%90%E3%81%96%E3%81%A3%E3%81%8F%E3%82%8A%E5%88%86%E3%81%91%E5%A4%A7%E7%9B%A4%E6%8C%AF%E3%82%8B%E8%88%9E%E3%81%84'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background" aria-label="フッター">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {/* ロゴ・紹介 */}
          <div className="sm:col-span-1">
            <div className="mb-4">
              <p className="font-elegant text-2xl tracking-widest text-background/90 italic mb-0.5">
                Loveliest
              </p>
              <p className="font-body text-[10px] tracking-[0.2em] text-background/50 uppercase">
                LED 脱毛 / 我孫子
              </p>
            </div>
            <p className="font-body text-sm text-background/60 leading-[1.85]">
              千葉県我孫子市のトータルビューティーサロン。
              <br />
              医療に近い効果のLED脱毛を、
              <br />
              都度払いでご提供しています。
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-background/50 hover:text-background/80 transition-colors font-body text-sm"
              aria-label="Instagramをフォローする（新しいタブで開きます）"
            >
              <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </div>

          {/* サロン情報 */}
          <div>
            <h3 className="font-display text-sm font-medium text-background/80 mb-5 tracking-wide">
              サロン情報
            </h3>
            <ul className="space-y-3.5 font-body text-sm text-background/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 shrink-0 mt-0.5 text-background/40" aria-hidden />
                <span>
                  千葉県我孫子市並木6-10-5
                  <br />
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-background/80 transition-colors"
                    aria-label="Google マップで場所を確認（新しいタブで開きます）"
                  >
                    Google マップで確認
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-background/40" aria-hidden />
                <a
                  href="tel:08025628508"
                  className="hover:text-background/80 transition-colors"
                >
                  080-2562-8508
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Car className="size-4 shrink-0 mt-0.5 text-background/40" aria-hidden />
                <span>
                  駐車場あり（2台）
                  <br />
                  <a
                    href="https://maps.app.goo.gl/2Zv3GjZ8rbSV33ju8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-background/80 transition-colors"
                    aria-label="並木五丁目パーキングをGoogle マップで確認（新しいタブで開きます）"
                  >
                    並木五丁目パーキングの３番と６番
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="size-4 shrink-0 mt-0.5 text-background/40" aria-hidden />
                <span>
                  JR我孫子駅 徒歩15分
                  <br />
                  ※ 詳細はホットペッパーにてご確認ください
                </span>
              </li>
            </ul>
          </div>

          {/* ご予約 */}
          <div>
            <h3 className="font-display text-sm font-medium text-background/80 mb-5 tracking-wide">
              ご予約・お問い合わせ
            </h3>
            <div className="space-y-3">
              <a
                href={HOTPEPPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta flex items-center justify-center gap-2 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-medium text-sm px-5 py-3 rounded-full shadow-sm shadow-primary/10 whitespace-nowrap"
                aria-label="ホットペッパーで予約する（新しいタブで開きます）"
              >
                <svg viewBox="0 0 24 24" className="size-4 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
                  <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
                  <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
                </svg>
                ホットペッパーで予約する
              </a>
              <p className="font-body text-xs text-background/40 text-center">
                24時間ネット予約受付中
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        {/* ボトムバー */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-xs text-background/35">
          <p>© {new Date().getFullYear()} Loveliest. All rights reserved.</p>
          <nav className="flex gap-5">
            <a href="#" className="hover:text-background/60 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-background/60 transition-colors">
              特定商取引法に基づく表記
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
