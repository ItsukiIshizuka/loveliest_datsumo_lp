import { MapPin, Train, Car, Phone } from 'lucide-react'

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/t5yr2aNjqBoa9cnLA'
const PARKING_MAPS_URL = 'https://maps.app.goo.gl/2Zv3GjZ8rbSV33ju8'

const accessItems = [
  {
    icon: Train,
    label: '電車でお越しの方',
    detail: 'JR我孫子駅 徒歩15分',
  },
  {
    icon: Car,
    label: 'お車でお越しの方',
    detail: '駐車場あり（2台）',
    sub: '並木五丁目パーキングの３番と６番',
    subHref: PARKING_MAPS_URL,
  },
  {
    icon: Phone,
    label: 'お電話',
    detail: '080-2562-8508',
    href: 'tel:08025628508',
  },
]

export default function Access() {
  return (
    <section id="access" className="py-24 sm:py-32 bg-secondary/40" aria-labelledby="access-title">
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-14 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Access
          </p>
          <h2
            id="access-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            サロンへのアクセス
          </h2>
          <p className="font-body text-muted-foreground text-base">
            千葉県我孫子市 / プライベートサロン
          </p>
        </div>

        {/* マップ + 情報 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 reveal reveal-stagger-2">
          {/* Google Maps */}
          <div className="rounded-2xl overflow-hidden shadow-sm ring-1 ring-border aspect-[4/3] lg:aspect-auto lg:min-h-[360px] bg-secondary">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.05493665460392!2d140.0180112614968!3d35.876482314973806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189d5f8463c34b%3A0x7c5ac8a681183fc6!2z44CSMjcwLTExNjUg5Y2D6JGJ55yM5oiR5a2r5a2Q5biC5Lim5pyo77yW5LiB55uu77yR77yQ4oiS77yV!5e0!3m2!1sja!2sjp!4v1775293026680!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', minHeight: '360px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Loveliest サロンの地図"
            />
          </div>

          {/* アクセス情報 */}
          <div className="flex flex-col justify-center gap-4">
            {/* 住所 */}
            <div className="bg-card rounded-2xl p-5 shadow-sm ring-1 ring-border flex items-start gap-4">
              <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="size-4 text-primary" aria-hidden />
              </div>
              <div>
                <p className="font-body text-xs text-muted-foreground mb-0.5">住所</p>
                <p className="font-body text-sm font-medium text-foreground">千葉県我孫子市並木6-10-5</p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-primary underline underline-offset-2 hover:opacity-70 transition-opacity mt-1 inline-block"
                  aria-label="Google マップで確認（新しいタブで開きます）"
                >
                  Google マップで確認 →
                </a>
              </div>
            </div>

            {/* アクセス項目 */}
            {accessItems.map((item) => (
              <div
                key={item.label}
                className="bg-card rounded-2xl p-5 shadow-sm ring-1 ring-border flex items-start gap-4"
              >
                <div className="size-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="size-4 text-primary" aria-hidden />
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.detail}
                    </a>
                  ) : (
                    <p className="font-body text-sm font-medium text-foreground">{item.detail}</p>
                  )}
                  {item.sub && (
                    <a
                      href={item.subHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs text-primary underline underline-offset-2 hover:opacity-70 transition-opacity mt-0.5 inline-block"
                      aria-label={`${item.sub}をGoogle マップで確認（新しいタブで開きます）`}
                    >
                      {item.sub}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
