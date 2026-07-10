// memotile-landing-page/src/PhotobookSection.tsx
import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ScanFace, BookHeart, Images, MapPin, ArrowRight } from 'lucide-react';

type Language = 'EN' | 'TH';

// 앱 웜톤(photobookTheme)과 동일 팔레트
const C = {
  coral: '#FF7E66', pink: '#FF6F91',
  ink: '#3D2B26', sub: '#8C7B73', muted: '#B8A79E',
  bg: '#FFF8F4', surfaceAlt: '#FFF0E8', border: '#F2E5DC',
};

// 가격 = 앱 photobookPricing 최소가(소프트 48p)와 동일. 바뀌면 sizes 배열만 수정.
const S = {
  EN: {
    eyebrow: 'AI PHOTOBOOK',
    headline: 'Not just on your wall —',
    headlineAccent: 'a book to keep forever.',
    sub: 'Just scan your gallery. Our AI finds the people you love, picks your best moments, and lays them into a beautiful photobook — no editing needed.',
    books: [
      { img: '/section1.png', title: "Baby's First Year", sub: 'AI PHOTOBOOK', rotate: '-6deg' },
      { img: '/section2.png', title: 'Our Love Story', sub: 'AI PHOTOBOOK', rotate: '3deg' },
      { img: '/section3.png', title: 'Adventures 2024', sub: 'AI PHOTOBOOK', rotate: '-3deg' },
    ],
    howTitle: 'HOW IT WORKS',
    steps: [
      { t: 'Scan faces', d: 'We find the people you love across your whole gallery.' },
      { t: 'AI auto-curates', d: 'AI selects & arranges your best shots into pages — no editing.' },
      { t: 'Flip & order', d: 'Preview the finished book, then order in a single tap.' },
    ],
    priceTitle: 'Pick your size',
    from: 'from',
    sizes: [
      { size: 'A5', desc: 'Compact · handy', price: 1190 },
      { size: 'A4', desc: 'Most loved', price: 1890, popular: true },
      { size: 'A3', desc: 'Large · a gift', price: 4190 },
    ],
    popular: 'Most Loved',
    coverNote: 'Softcover & Hardcover · A5 / A4 / A3 · printed in Thailand',
    diffs: [
      { t: 'AI does the work', d: 'No manual editing' },
      { t: 'From just 25 photos', d: 'Start small' },
      { t: 'Made in Thailand', d: 'Fast local delivery' },
    ],
    cta: 'Make your photobook',
  },
  TH: {
    eyebrow: 'สมุดภาพ AI',
    headline: 'ไม่ใช่แค่บนผนัง —',
    headlineAccent: 'แต่เป็นเล่มที่เก็บไว้ได้ตลอดไป',
    sub: 'แค่สแกนแกลเลอรีของคุณ AI จะค้นหาคนที่คุณรัก เลือกช่วงเวลาที่ดีที่สุด และจัดวางเป็นสมุดภาพสวยๆ ให้ — ไม่ต้องแก้ไขเอง',
    books: [
      { img: '/section1.png', title: 'ปีแรกของลูกน้อย', sub: 'สมุดภาพ AI', rotate: '-6deg' },
      { img: '/section2.png', title: 'เรื่องราวความรักของเรา', sub: 'สมุดภาพ AI', rotate: '3deg' },
      { img: '/section3.png', title: 'การผจญภัย 2024', sub: 'สมุดภาพ AI', rotate: '-3deg' },
    ],
    howTitle: 'ขั้นตอนการทำงาน',
    steps: [
      { t: 'สแกนใบหน้า', d: 'ค้นหาคนที่คุณรักจากทั้งแกลเลอรีของคุณ' },
      { t: 'AI คัดสรรอัตโนมัติ', d: 'AI เลือกและจัดวางรูปที่ดีที่สุดเป็นหน้าๆ ไม่ต้องแก้ไขเอง' },
      { t: 'พลิกดูแล้วสั่งซื้อ', d: 'ดูตัวอย่างเล่มจริง แล้วสั่งซื้อได้ในแตะเดียว' },
    ],
    priceTitle: 'เลือกขนาด',
    from: 'เริ่มต้น',
    sizes: [
      { size: 'A5', desc: 'เล่มเล็ก พกพาง่าย', price: 1190 },
      { size: 'A4', desc: 'ยอดนิยม', price: 1890, popular: true },
      { size: 'A3', desc: 'เล่มใหญ่ · เป็นของขวัญ', price: 4190 },
    ],
    popular: 'ยอดนิยม',
    coverNote: 'ปกอ่อน & ปกแข็ง · A5 / A4 / A3 · พิมพ์ในไทย',
    diffs: [
      { t: 'AI ทำให้ทั้งหมด', d: 'ไม่ต้องแก้ไขเอง' },
      { t: 'เริ่มแค่ 25 รูป', d: 'เริ่มจากน้อยได้' },
      { t: 'ผลิตในไทย', d: 'จัดส่งเร็วในประเทศ' },
    ],
    cta: 'สร้างสมุดภาพของคุณ',
  },
} as const;

function BookCard({ img, title, sub, rotate }: { img: string; title: string; sub: string; rotate: string }) {
  return (
    <motion.div whileHover={{ y: -12, rotate: 0 }} transition={{ type: 'spring', stiffness: 200 }} style={{ rotate }} className="w-40 md:w-52 shrink-0 relative">
      {/* 책 페이지 단면 */}
      <div className="absolute top-3 bottom-3 -right-1.5 w-2.5 rounded-r-md" style={{ background: '#FFE0D2' }} />
      <div className="relative rounded-2xl overflow-hidden bg-white" style={{ boxShadow: '0 24px 50px -12px rgba(255,111,145,0.35)' }}>
        <div className="aspect-[4/5] relative">
          <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-x-0 bottom-0 px-4 pt-10 pb-4" style={{ background: 'linear-gradient(to top, rgba(61,43,38,0.72), rgba(61,43,38,0.15), transparent)' }}>
            <p className="text-white font-black text-[15px] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>{title}</p>
            <p className="text-white/85 text-[10px] font-bold mt-1 tracking-[0.15em]">{sub}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PhotobookSection({ lang, mode = 'full' }: { lang: Language; mode?: 'full' | 'intro' | 'pricing' }) {
  const t = S[lang];
  const stepIcons = [ScanFace, Sparkles, BookHeart];
  const diffIcons = [Sparkles, Images, MapPin];
  const showIntro = mode !== 'pricing';   // 설명·목업·스텝·차별점·CTA
  const showPricing = mode !== 'intro';    // 가격 카드
  return (
    <section id="photobook" className="px-6 md:px-12 py-24 overflow-x-hidden" style={{ background: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-6xl mx-auto">
        {showIntro && (<>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] font-black rounded-full mb-5" style={{ background: C.surfaceAlt, color: C.coral }}>
            <Sparkles size={13} /> {t.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-black leading-[1.15]" style={{ color: C.ink }}>
            {t.headline} <span className="italic" style={{ color: C.coral }}>{t.headlineAccent}</span>
          </h2>
          <p className="text-base md:text-lg font-medium leading-relaxed mt-6" style={{ color: C.sub }}>{t.sub}</p>
        </div>

        {/* 포토북 목업 쇼케이스 */}
        <div className="flex justify-center items-center gap-5 md:gap-8 flex-wrap mb-24">
          {t.books.map((b, i) => <BookCard key={i} {...b} />)}
        </div>

        {/* How it works */}
        <div className="mb-24">
          <h3 className="text-[11px] font-black uppercase tracking-[0.25em] mb-10 text-center" style={{ color: C.muted }}>{t.howTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <motion.div key={i} whileHover={{ y: -6 }} className="bg-white rounded-3xl p-8 text-center" style={{ border: `1px solid ${C.border}`, boxShadow: '0 10px 30px -12px rgba(255,111,145,0.18)' }}>
                  <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-5" style={{ background: C.surfaceAlt, color: C.coral }}><Icon size={28} /></div>
                  <div className="text-[11px] font-black mb-1.5 tracking-wider" style={{ color: C.coral }}>STEP {i + 1}</div>
                  <p className="font-black text-lg mb-1.5" style={{ color: C.ink }}>{s.t}</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: C.sub }}>{s.d}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        </>)}

        {showPricing && (<>
        {/* Pricing */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-base md:text-lg font-black mb-5" style={{ background: C.surfaceAlt, color: C.coral }}>
            📕 {lang === 'EN' ? 'Photobook' : 'สมุดภาพ'}
          </span>
          <p className="text-[11px] font-black uppercase tracking-[0.2em] mb-3" style={{ color: C.muted }}>{lang === 'EN' ? 'AI-curated book · keep forever' : 'สมุดภาพจาก AI · เก็บได้ตลอดไป'}</p>
          <h3 className="text-2xl md:text-4xl font-black" style={{ color: C.ink }}>{t.priceTitle}</h3>
          <p className="text-sm md:text-base font-medium mt-3" style={{ color: C.muted }}>{t.coverNote}</p>
        </div>
        {/* 포토북 예시: 아기 포토북 + 가족 */}
        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
          <img src="/photobook-baby.png" alt="Baby photobook" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
          <img src="/photobook-family.png" alt="Family enjoying photobook" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-16 max-w-4xl mx-auto">
          {t.sizes.map((sz: any) => (
            <motion.div key={sz.size} whileHover={{ y: -8 }}
              className="relative rounded-3xl p-8 flex flex-col items-center text-center bg-white"
              style={{
                border: `2px solid ${sz.popular ? C.coral : C.border}`,
                boxShadow: sz.popular ? '0 24px 50px -12px rgba(255,126,102,0.4)' : '0 8px 24px -14px rgba(255,111,145,0.2)',
                transform: sz.popular ? 'scale(1.04)' : 'none',
              }}>
              {sz.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md w-max" style={{ background: `linear-gradient(135deg, ${C.coral}, ${C.pink})` }}>{t.popular}</div>
              )}
              <div className="text-5xl font-black mt-2" style={{ color: C.ink }}>{sz.size}</div>
              <div className="text-sm font-bold mt-2 mb-6" style={{ color: C.muted }}>{sz.desc}</div>
              <div className="text-[11px] uppercase tracking-widest font-bold" style={{ color: C.muted }}>{t.from}</div>
              <div className="text-3xl font-black" style={{ color: C.coral }}>฿{sz.price.toLocaleString()}</div>
            </motion.div>
          ))}
        </div>

        </>)}

        {showIntro && (<>
        {/* Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 max-w-4xl mx-auto">
          {t.diffs.map((d, i) => {
            const Icon = diffIcons[i];
            return (
              <div key={i} className="flex items-center gap-3.5 rounded-2xl px-5 py-4 bg-white" style={{ border: `1px solid ${C.border}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: C.surfaceAlt, color: C.coral }}><Icon size={18} /></div>
                <div>
                  <p className="text-sm font-black leading-tight" style={{ color: C.ink }}>{d.t}</p>
                  <p className="text-[12px] font-medium mt-0.5" style={{ color: C.muted }}>{d.d}</p>
                </div>
              </div>
            );
          })}
        </div>

        </>)}

        {/* CTA */}
        <div className="text-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-white px-9 py-4 rounded-2xl font-black text-base hover:scale-105 transition-all"
            style={{ background: `linear-gradient(135deg, ${C.coral}, ${C.pink})`, boxShadow: '0 16px 34px -10px rgba(255,111,145,0.5)' }}>
            <BookHeart size={19} /> {t.cta} <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
