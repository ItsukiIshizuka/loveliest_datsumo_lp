import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

const reviews = [
  {
    initials: 'Y.T',
    name: 'Y.T さん（28歳・会社員）',
    stars: 5,
    body: '医療脱毛は怖くて踏み出せなかったのですが、Loveliestさんのおかげで脱毛を始められました。痛みがほとんどなくて驚きました。全身1時間で終わるので仕事帰りに通えます！',
  },
  {
    initials: 'M.S',
    name: 'M.S さん（32歳・育児中）',
    stars: 5,
    body: '子連れでも相談に乗っていただけて、本当に助かりました。個室なので子どもが泣いても気にならないし、先生がとても丁寧で安心できます。都度払いなので無理なく続けられています。',
  },
  {
    initials: 'A.K',
    name: 'A.K さん（25歳・学生）',
    stars: 5,
    body: 'お財布に優しい価格で、しかも回数券の縛りなし。初回体験してみてとても良かったので、定期的に通っています。肌がきれいになってきて自信が持てるようになりました。',
  },
  {
    initials: 'R.N',
    name: 'R.N さん（35歳・パート）',
    stars: 5,
    body: '他のサロンより断然リーズナブル！でも効果はしっかりある感じがします。スタッフさんの対応が丁寧でリピートしています。我孫子でこんなに素敵なサロンがあってよかったです。',
  },
]

export default function Testimonials() {
  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: 'linear-gradient(180deg, var(--blush) 0%, var(--background) 100%)' }}
      aria-labelledby="testimonials-title"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-16 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Reviews
          </p>
          <h2
            id="testimonials-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            お客様の声
          </h2>
          <div className="flex items-center justify-center gap-2 font-body text-sm text-muted-foreground">
            <span className="text-[var(--gold-accent)] text-base" aria-label="星5">
              ★★★★★
            </span>
            <span>Google口コミ平均 5.0（実際の口コミより抜粋）</span>
          </div>
        </div>

        {/* レビューカードグリッド */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`reveal reveal-stagger-${(i % 4) + 1}`}
            >
              <Card className="h-full border-primary/10 hover:border-primary/25 hover:shadow-md transition-all duration-300">
                <CardContent className="pt-6 pb-6 px-6 flex flex-col gap-4 h-full">
                  {/* 引用マーク */}
                  <span
                    className="font-elegant text-5xl text-primary/20 leading-none select-none"
                    aria-hidden
                  >
                    "
                  </span>

                  {/* 星評価 */}
                  <p
                    className="text-[var(--gold-accent)] text-sm -mt-3"
                    aria-label={`${r.stars}点`}
                  >
                    {'★'.repeat(r.stars)}
                  </p>

                  {/* レビュー本文 */}
                  <p className="font-body text-sm text-foreground leading-[1.9] flex-1">
                    {r.body}
                  </p>

                  {/* 投稿者 */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border/60">
                    <Avatar size="default">
                      <AvatarFallback className="bg-primary/10 text-primary text-xs font-body">
                        {r.initials}
                      </AvatarFallback>
                    </Avatar>
                    <p className="font-body text-xs text-muted-foreground">{r.name}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
