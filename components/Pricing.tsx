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
          <a
            href={LINE_URL}
            className="btn-cta inline-flex items-center justify-center gap-2.5 bg-white/70 backdrop-blur-sm border border-primary/30 text-primary font-body font-semibold text-base px-8 py-4 rounded-full shadow-md shadow-primary/10"
            aria-label="LINEで予約する"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 fill-primary" aria-label="LINE">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M12 0C5.373 0 0 4.973 0 11.096c0 5.461 4.252 10.015 9.999 10.938.391.075.924.232 1.057.534.12.273.079.699.038.975l-.163 1.001c-.045.346-.29 1.332 1.062.727 1.351-.604 7.269-4.28 9.911-7.337C23.147 15.396 24 13.322 24 11.096 24 4.973 18.627 0 12 0" />
            </svg>
            LINEで予約・お問い合わせ
          </a>
        </div>
      </div>
    </section>
  )
}
