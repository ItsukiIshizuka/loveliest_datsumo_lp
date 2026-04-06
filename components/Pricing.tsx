import { Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import BookingButton from '@/components/BookingButton'

const plans = [
  {
    name: '部分脱毛',
    nameEn: 'Partial',
    firstPrice: '4,900',
    regularPrice: '6,400',
    time: '約30分',
    badge: null,
    features: ['わきや Vライン など部位ごと', '約30分で完了', '都度払い・回数券なし', '初回¥4,900でお試し可能'],
  },
  {
    name: '全身脱毛',
    nameEn: 'Full Body',
    firstPrice: '9,900',
    regularPrice: '11,400',
    time: '約1時間',
    badge: 'おすすめ',
    features: ['全身くまなくケア', '約1時間で完了', '都度払い・回数券なし', '初回¥9,900でお試し可能'],
  },
]

export default function Pricing() {
  return (
    <section className="py-24 sm:py-32 bg-background" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-16 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Pricing
          </p>
          <h2
            id="pricing-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            <span className="whitespace-nowrap">シンプルで</span>
            <br className="sm:hidden" />
            <span className="whitespace-nowrap">わかりやすい料金</span>
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            <span className="whitespace-nowrap">都度払いだから、続けやすい。</span>
            <br />
            <span className="whitespace-nowrap">回数券・コースの縛りは</span>
            <span className="whitespace-nowrap">一切ありません。</span>
          </p>
        </div>

        {/* 料金カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal reveal-stagger-${i + 1}`}
            >
              <Card
                className={[
                  'h-full transition-all duration-300',
                  p.badge
                    ? 'border-2 border-primary shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/15'
                    : 'border-primary/15 hover:border-primary/30 hover:shadow-lg',
                ].join(' ')}
              >
                <CardContent className="pt-7 pb-7 px-6 flex flex-col gap-5 h-full">
                  {/* プランバッジ */}
                  {p.badge && (
                    <Badge className="w-fit bg-primary text-primary-foreground text-xs font-body">
                      {p.badge}
                    </Badge>
                  )}

                  {/* プラン名 */}
                  <div>
                    <p className="font-elegant text-sm tracking-widest text-muted-foreground italic mb-0.5">
                      {p.nameEn}
                    </p>
                    <h3 className="font-display text-2xl font-medium text-foreground">
                      {p.name}
                    </h3>
                  </div>

                  {/* 価格 */}
                  <div className="bg-secondary/60 rounded-xl p-4 space-y-2">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-body text-xs text-muted-foreground w-20 shrink-0">
                        初回
                      </span>
                      <span className="font-display text-3xl font-medium text-primary">
                        ¥{p.firstPrice}
                      </span>
                      <span className="font-body text-xs text-muted-foreground">（税込）</span>
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-body text-xs text-muted-foreground w-20 shrink-0">
                        2回目以降
                      </span>
                      <span className="font-display text-2xl font-medium text-foreground">
                        ¥{p.regularPrice}
                      </span>
                      <span className="font-body text-xs text-muted-foreground">（税込）</span>
                    </div>
                    <p className="font-body text-xs text-muted-foreground pt-1">
                      施術時間：{p.time}
                    </p>
                  </div>

                  {/* 特徴リスト */}
                  <ul className="space-y-2.5 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 font-body text-sm text-foreground">
                        <Check className="size-4 text-primary shrink-0 mt-0.5" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* 注意書き + CTA */}
        <div className="reveal reveal-stagger-3 text-center space-y-6">
          <p className="font-body text-xs text-muted-foreground">
            ※ 表示価格はすべて税込です。施術部位・毛量によって時間が前後する場合があります。
          </p>
          <BookingButton className="btn-cta inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-sm px-8 py-4 rounded-full shadow-md shadow-primary/10 whitespace-nowrap">
            <svg viewBox="0 0 24 24" className="size-5 shrink-0 stroke-primary fill-none stroke-2" aria-hidden>
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="16" y1="2" x2="16" y2="6" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" strokeLinecap="round" />
            </svg>
            ホットペッパーで予約する
          </BookingButton>
        </div>
      </div>
    </section>
  )
}
