import { Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const LINE_URL = '#' // TODO: 実際のLINE URLに差し替え

const plans = [
  {
    name: '部分脱毛',
    nameEn: 'Partial',
    firstPrice: '3,900',
    regularPrice: '4,900',
    time: '約30分',
    badge: null,
    features: ['わきや Vライン など部位ごと', '約30分で完了', '都度払い・回数券なし', '初回¥3,900でお試し可能'],
  },
  {
    name: '全身脱毛',
    nameEn: 'Full Body',
    firstPrice: '9,900',
    regularPrice: '10,900',
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
            シンプルで
            <br className="sm:hidden" />
            わかりやすい料金
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            都度払いだから、続けやすい。
            <br />
            回数券・コースの縛りは一切ありません。
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
          <a
            href={LINE_URL}
            className="btn-cta inline-flex items-center justify-center gap-2 bg-[#06C755] text-white font-body font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-[#06C755]/25"
            aria-label="LINEで予約する"
          >
            <span className="font-bold text-xl leading-none" aria-hidden>L</span>
            LINEで予約・お問い合わせ
          </a>
        </div>
      </div>
    </section>
  )
}
