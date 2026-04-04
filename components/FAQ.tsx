import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

const faqs = [
  {
    value: 'q1',
    q: 'LED脱毛の効果はありますか？',
    a: 'はい、LED脱毛は毛根にダメージを与えることで毛の再生を抑制します。医療レーザー脱毛ほどの即効性はありませんが、継続することで医療脱毛に近い効果が期待できます。肌へのダメージが少ないため、敏感肌の方にも多くご利用いただいています。',
  },
  {
    value: 'q2',
    q: '痛みはありますか？',
    a: 'LED脱毛は医療レーザーと比べて痛みがほとんどありません。多くの方が「暖かい感じ」「ほんのりする程度」と感じる施術です。痛みが心配で医療脱毛に踏み出せなかった方にも、安心してお勧めできます。',
  },
  {
    value: 'q3',
    q: '何回くらい通えばいいですか？',
    a: '毛の量や生え方、部位によって異なりますが、一般的に効果を実感するには月1〜2回のペースで複数回通っていただくことをお勧めしています。まずはお試し感覚で1〜2回ご体験いただき、効果を確認してから続けていただく方が多いです。',
  },
  {
    value: 'q4',
    q: '施術時間はどのくらいですか？',
    a: '全身脱毛は約1時間、部分脱毛は施術部位により約15〜30分です。お仕事帰りや休憩の合間にもお立ち寄りいただけるよう、スピード施術を大切にしています。',
  },
  {
    value: 'q5',
    q: '子どもを連れて行ってもいいですか？',
    a: 'はい、ご相談ください。完全個室のプライベートサロンですので、周りへの気遣いは不要です。事前にご連絡いただければ、お子さまが一緒でも対応できる場合がございます。詳細はLINEまたはお電話でお気軽にご確認ください。',
  },
  {
    value: 'q6',
    q: '医療脱毛との違いは何ですか？',
    a: '医療脱毛は高出力のレーザーを使用するため即効性が高いですが、痛みが強く・費用も高い傾向があります。LED脱毛は低刺激で肌に優しく、コース縛りなしで始めやすいのが特徴です。「医療脱毛は怖い」「まずは試してみたい」という方にLoveliestのLED脱毛はぴったりです。',
  },
  {
    value: 'q7',
    q: '予約方法を教えてください。',
    a: 'LINEからのご予約が最もスムーズです。LINEをお持ちでない方はお電話（080-2562-8508）でも承っています。初回は無料カウンセリングを行ってから施術に入りますので、安心してお越しください。',
  },
]

export default function FAQ() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/40" aria-labelledby="faq-title">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-14 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            FAQ
          </p>
          <h2
            id="faq-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            よくあるご質問
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-sm mx-auto">
            不明な点はLINEでも気軽にご質問ください。
          </p>
        </div>

        {/* アコーディオン */}
        <div className="reveal reveal-stagger-2">
          <Accordion multiple className="divide-y divide-border rounded-2xl bg-card shadow-sm ring-1 ring-border overflow-hidden">
            {faqs.map((faq) => (
              <AccordionItem key={faq.value} value={faq.value} className="border-0">
                <AccordionTrigger className="px-5 py-4 font-body text-sm font-medium text-foreground hover:text-primary hover:no-underline transition-colors rounded-none">
                  <span className="text-left pr-4">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-5">
                  <div className="font-body text-sm text-muted-foreground leading-[1.9] pb-4">
                    {faq.a}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
