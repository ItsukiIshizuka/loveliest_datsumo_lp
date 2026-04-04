import { Zap, Clock, Wallet, Home } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const benefits = [
  {
    icon: Zap,
    title: '医療に近い効果のLED脱毛',
    body: '最新のLED脱毛機を使用。高い効果を保ちながらも肌への刺激を最小限に抑えます。デリケートな肌質の方や、医療脱毛の痛みが心配な方にも安心です。',
    stagger: 'reveal-stagger-1',
  },
  {
    icon: Clock,
    title: '全身 約1時間のスピード施術',
    body: '全身脱毛でも約1時間、部分脱毛は約30分で完了。忙しいお仕事・育児の合間でも無理なく通えます。タイパを重視する方に選ばれています。',
    stagger: 'reveal-stagger-2',
  },
  {
    icon: Wallet,
    title: '都度払いで安心・縛りなし',
    body: '回数券・コースの縛りは一切なし。全身脱毛は初回¥9,900から。まずお試しで来てみて、納得できたら続けられる、無理のない価格体系です。',
    stagger: 'reveal-stagger-3',
  },
  {
    icon: Home,
    title: '完全個室・子連れ相談可',
    body: '周りの目を気にせずリラックスできる完全個室のプライベートサロン。小さなお子さま連れの方もお気軽にご相談ください。',
    stagger: 'reveal-stagger-4',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 sm:py-32 bg-background" aria-labelledby="benefits-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-16 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Why Loveliest
          </p>
          <h2
            id="benefits-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            Loveliestが選ばれる
            <br className="sm:hidden" />
            ４つの理由
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-md mx-auto leading-relaxed">
            「高い・痛い・時間がかかる」という脱毛のお悩みに、
            <br className="hidden sm:block" />
            Loveliestがお答えします。
          </p>
        </div>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {benefits.map((b) => {
            const Icon = b.icon
            return (
              <div key={b.title} className={`reveal ${b.stagger}`}>
                <Card className="h-full border-primary/10 hover:border-primary/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-br from-card to-[var(--blush)]/40">
                  <CardContent className="pt-6 pb-6 px-6 flex flex-col gap-4 h-full">
                    <div className="inline-flex items-center justify-center size-11 rounded-xl bg-primary/8">
                      <Icon className="size-5 text-primary" aria-hidden />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-medium text-foreground mb-2 leading-snug">
                        {b.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-[1.9]">
                        {b.body}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
