
const INSTAGRAM_URL = 'https://www.instagram.com/led_datsumo_loveliest_abiko2'

// 画像プレースホルダー（実際の施術画像が揃い次第差し替え）
const placeholders = [
  { label: 'サロン内部', sub: 'プライベート個室', gradient: 'from-[var(--pearl)] to-[var(--blush)]' },
  { label: 'LED脱毛機', sub: '最新機器使用', gradient: 'from-[var(--blush)] to-primary/20' },
  { label: 'Before / After', sub: '施術効果イメージ', gradient: 'from-primary/10 to-[var(--pearl)]' },
  { label: 'カウンセリング', sub: '丁寧な事前説明', gradient: 'from-[var(--blush)] to-secondary' },
]

export default function MediaSection() {
  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: 'var(--blush)' }}
      aria-labelledby="media-title"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-6">
        {/* ヘッダー */}
        <div className="text-center mb-14 reveal reveal-stagger-1">
          <p className="font-body text-[11px] tracking-[0.22em] uppercase text-primary mb-3">
            Gallery
          </p>
          <h2
            id="media-title"
            className="font-display text-3xl sm:text-4xl tracking-tight text-foreground mb-4"
          >
            サロンの雰囲気
          </h2>
          <p className="font-body text-muted-foreground text-base max-w-sm mx-auto leading-relaxed">
            清潔感のある完全個室で、リラックスして施術を受けられます。
          </p>
        </div>

        {/* 画像グリッド（プレースホルダー） */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {placeholders.map((p, i) => (
            <div
              key={p.label}
              className={`reveal reveal-stagger-${i + 1}`}
            >
              <div
                className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${p.gradient} aspect-square sm:aspect-[3/4] flex flex-col items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}
              >
                {/* 画像差し替え予定エリア */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
                  <p className="font-body text-xs font-medium text-foreground/60 mb-1">
                    {p.sub}
                  </p>
                  <p className="font-display text-sm font-medium text-foreground/80">
                    {p.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram誘導 */}
        <div className="reveal reveal-stagger-1 text-center">
          <p className="font-body text-sm text-muted-foreground mb-4">
            施術のビフォーアフターや最新情報はInstagramで発信中
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta inline-flex items-center gap-2.5 border border-primary/30 text-primary font-body font-medium text-sm px-6 py-3 rounded-full hover:bg-primary/5 transition-all duration-200"
            aria-label="InstagramでLoveliestをフォローする（新しいタブで開きます）"
          >
            {/* Instagram ロゴ代替 */}
            <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @led_datsumo_loveliest_abiko2
          </a>
        </div>
      </div>
    </section>
  )
}
