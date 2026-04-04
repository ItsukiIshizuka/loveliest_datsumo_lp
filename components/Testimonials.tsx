import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

const reviews = [
  {
    initials: 'M.K',
    name: 'M.K さん',
    stars: 5,
    body: '以前からマツエクでお世話になっていて脱毛を始めたということで行ってきました！最新の機械でとても丁寧だし安心して施術できました！効果が楽しみ！最後になんと朝食を出してくれてカフェのような居心地のいいお店です！オーナーのけいこさんの人柄が好きで通っています！スタッフさんも素敵でアットホームなまた行きたくなるサロンです！',
  },
  {
    initials: 'Y.U',
    name: 'Y.U さん',
    stars: 5,
    body: 'とても居心地が良く、最高の脱毛サロンです！全身脱毛を初めてやって、3回ほどで薄くなってきました。効果もあるし、店員さん方の気遣いも完璧です！気軽に美容のことも聞けます！終わった後の飲み物とホームベーカリーもとても美味しいです！脱毛するならここ通うのがオススメ！',
  },
  {
    initials: 'K.O',
    name: 'K.O さん',
    stars: 5,
    body: 'LED脱毛とゆうのはやったことが無かったのでお願いすることにしてみました。全然痛くなかったです！先端がすごく冷たくなっているので、デリケートゾーンは少し長めに冷やしてから照射してくれたり、とても丁寧に施術してくれました。まだ3回程度ですが、一番わかりやすいＶラインの毛質がだいぶ変わってる！お店の方達もとても親切で、とてもサービスの良い最強コスパのお店だと思います。',
  },
  {
    initials: 'A.K',
    name: 'A.K さん',
    stars: 5,
    body: 'とても居心地が良く、最高の脱毛サロンです！全身脱毛を初めてやって、3回ほどで薄くなってきました。効果もあるし、店員さん方の気遣いも完璧です！気軽に美容のことも聞けます！終わった後の飲み物とホームベーカリーもとても美味しいです！脱毛するならここ通うのがオススメ！',
  },
  {
    initials: 'T.K',
    name: 'T.K さん',
    stars: 5,
    body: 'ここ…本当にスタッフさんが可愛い！優しい！丁寧！！いつでも笑顔で迎えてくれる！ヘア、マツエク、ネイル、エステ、脱毛…全てがひとつの場所で叶う✨一ヶ所で全て終わるってかなり効率的だし、全てを任せられるって何よりも安心を得られます。私は、ここ以外、もう利用できない！',
  },
  {
    initials: 'M.O',
    name: 'M.O さん',
    stars: 5,
    body: '以前医療脱毛を受けた時は痛くて通うのが嫌になってしまいましたが、こちらの脱毛はびっくりするくらい痛みがなくて、なのに１回受けただけで毛が細く＆薄くなりました！うつ伏せになっているときも、iPadで動画が見られます！',
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
            <span>Google口コミ 5.0（実際の口コミより）</span>
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
