// memotile-landing-page/src/App.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MessageCircle, ChevronDown, User, Instagram, Truck } from 'lucide-react';
import { PhotobookSection } from './PhotobookSection';

import { translations, type Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('TH');
  const [page, setPage] = useState<'home' | 'pricing' | 'contact'>('home');
  const goTop = () => window.scrollTo({ top: 0, behavior: 'auto' });
  const navTo = (p: 'home' | 'pricing' | 'contact') => { setPage(p); goTop(); };
  const t = translations[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const Logo = ({ className = "text-xl" }: { className?: string }) => (
    <div className={`font-black tracking-tight uppercase ${className} flex items-center`}>
      <span className="text-[#3D2B26]">Memo</span>
      <span className="text-[#FF7E66]">t</span>
      <span className="text-[#FFB59E]">il</span>
      <span className="text-[#FF6F91]">e</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFF8F4] text-[#262626] font-sans overflow-x-hidden flex flex-col">
      {/* Navigation */}
      <nav className="h-16 flex items-center justify-between px-6 lg:px-12 bg-white/80 backdrop-blur-sm border-b border-gray-100 fixed top-0 left-0 right-0 z-50">
        <button onClick={() => navTo('home')} className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-[#3D2B26] rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <Logo className="text-lg" />
        </button>

        {/* 페이지 네비 */}
        <div className="flex items-center gap-5 md:gap-8 text-sm md:text-base font-bold tracking-wide">
          {([
            { key: 'home', en: 'Home', th: 'หน้าแรก' },
            { key: 'pricing', en: 'Pricing', th: 'ราคา' },
            { key: 'contact', en: 'Contact', th: 'ติดต่อ' },
          ] as { key: 'home' | 'pricing' | 'contact'; en: string; th: string }[]).map((n) => (
            <button key={n.key} onClick={() => navTo(n.key)}
              className="transition-colors relative"
              style={{ color: page === n.key ? '#FF7E66' : '#8C7B73' }}>
              {lang === 'EN' ? n.en : n.th}
              {page === n.key && <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full" style={{ background: '#FF7E66' }} />}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full text-[10px] font-bold border border-gray-200">
          <button
            onClick={() => setLang('EN')}
            className={`px-3 py-1 rounded-full transition-all ${lang === 'EN' ? 'bg-white shadow-sm text-[#FF7E66]' : 'text-gray-500'}`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('TH')}
            className={`px-3 py-1 rounded-full transition-all ${lang === 'TH' ? 'bg-white shadow-sm text-[#FF7E66]' : 'text-gray-500'}`}
          >
            TH
          </button>
        </div>
      </nav>

      {page === 'home' && (<>
      {/* Hero Section */}
      <section className="flex-1 flex flex-col lg:flex-row items-center justify-center px-8 md:px-12 pt-36 lg:pt-48 pb-16 max-w-7xl mx-auto w-full gap-12 lg:gap-20 overflow-hidden">

        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-3 py-1 bg-[#FFF0E8] text-[#FF7E66] text-[10px] uppercase tracking-widest font-bold rounded-full mb-6 italic"
          >
            #NoNailsRequired
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl xl:text-7xl font-black leading-tight mb-6 tracking-tight text-[#3D2B26]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={lang}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {lang === 'EN' ? (
                  <>Moments you love, <br /><span className="text-[#FF7E66] italic">now on your wall.</span></>
                ) : (
                  <>ช่วงเวลาที่คุณรัก <br /><span className="text-[#FF7E66] italic">บนผนังของคุณ</span></>
                )}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-[#3D2B26] mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0 opacity-75"
          >
            {t.heroSub}
          </motion.p>

          {/* 두 제품 요약 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[13px] font-bold text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
          >
            {lang === 'EN'
              ? '🖼️ Wall tiles to display  ·  📕 AI photobooks to keep'
              : '🖼️ กรอบรูปติดผนัง  ·  📕 สมุดภาพ AI ไว้เก็บ'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center lg:items-start"
          >
            <span className="text-[10px] text-gray-400 mb-3 uppercase tracking-widest font-bold">Get the app</span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">

              {/* Apple App Store Button */}
              <a href="https://apps.apple.com/app/id6762596017" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 bg-[#3D2B26] text-white px-5 py-2.5 rounded-xl hover:bg-[#2A211C] hover:scale-105 transition-all shadow-lg w-48 relative z-10">
                <svg className="w-7 h-7" viewBox="0 0 384 512" fill="currentColor">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none font-medium mb-0.5 opacity-80">Download on the</span>
                  <span className="text-[17px] leading-none font-semibold">App Store</span>
                </div>
              </a>

              {/* Google Play Store Button */}
              <a href="https://play.google.com/store/apps/details?id=com.memotile.android" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 bg-[#3D2B26] text-white px-5 py-2.5 rounded-xl hover:bg-[#2A211C] hover:scale-105 transition-all shadow-lg w-48 relative z-10">
                <svg className="w-7 h-7" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                </svg>
                <div className="text-left flex flex-col justify-center">
                  <span className="text-[10px] leading-none font-medium mb-0.5 opacity-80">GET IT ON</span>
                  <span className="text-[16px] leading-none font-semibold">Google Play</span>
                </div>
              </a>

            </div>
          </motion.div>
        </div>

        {/* Right: Images */}
        <motion.div
          initial={{ opacity: 0, rotate: 0, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 12, scale: 1.0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 flex justify-center items-center py-10 lg:py-0"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6 p-4">
            <motion.div whileHover={{ scale: 1.05, rotate: -2 }} className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white shadow-2xl rounded-sm p-1 border border-gray-100 transform -translate-y-5">
              <img src="/hero1.png" className="w-full h-full object-cover rounded-sm" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: 2 }} className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white shadow-2xl rounded-sm p-1 transform translate-x-3">
              <div className="w-full h-full bg-gray-50 rounded-sm flex flex-col items-center justify-center border border-gray-100">
                <Logo className="text-xl md:text-2xl xl:text-3xl" />
                <span className="text-[9px] text-gray-400 font-bold mt-2 tracking-widest uppercase">Premium Tile</span>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: -3 }} className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white shadow-2xl rounded-sm p-1 border border-gray-100">
              <img src="/hero2.png" className="w-full h-full object-cover rounded-sm" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, rotate: 3 }} className="w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 xl:w-56 xl:h-56 bg-white shadow-2xl rounded-sm p-1 border border-gray-100 translate-y-5">
              <img src="/hero3.png" className="w-full h-full object-cover rounded-sm" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Info Sections Container */}
      <section className="bg-white px-8 md:px-12 py-16 flex flex-col lg:flex-row gap-12 border-t border-gray-100 w-full overflow-x-hidden">
        {/* How it works */}
        <div className="lg:w-1/2 lg:border-r border-gray-100 lg:pr-16">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">{t.howItWorksTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.howItWorksSteps.map((step, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="flex flex-col gap-2">
                <div className="w-10 h-10 bg-[#FFF0E8] rounded-full flex items-center justify-center text-[#FF7E66] font-black mb-2">{idx + 1}</div>
                <p className="text-sm font-black leading-tight mb-1 text-[#3D2B26]">{step.title}</p>
                <p className="text-[11px] text-[#3D2B26] opacity-70 font-medium leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inspiration */}
        <div className="lg:w-1/2">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-8">{t.inspirationTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/section1.png', '/section2.png', '/section3.png', '/section4.png'].map((src, idx) => (
              <div key={idx} className="flex flex-col gap-3 group cursor-pointer">
                <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300 border-2 border-transparent group-hover:border-[#FF7E66]">
                  <img src={src} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 포토북 소개(설명만, 가격 없음) — 홈 */}
      <PhotobookSection lang={lang} mode="intro" />
      </>)}

      {page === 'pricing' && (<>
      {/* Pricing & Bundles Section */}
      <section className="px-8 md:px-12 py-20 bg-white border-t border-gray-100 overflow-x-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-base md:text-lg font-black mb-5" style={{ background: '#FFF0E8', color: '#FF7E66' }}>
              🖼️ {lang === 'EN' ? 'Photo Tiles' : 'กรอบติดผนัง'}
            </span>
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B8A79E] mb-3">{lang === 'EN' ? 'Stick on your wall · 20×20cm' : 'ติดผนัง · 20×20 ซม.'}</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#3D2B26] mb-4">{t.pricingTitle}</h2>
            <p className="text-gray-500 font-medium max-w-xl mx-auto">{t.pricingSub}</p>
          </div>

          {/* 타일 벽 예시 2장 나란히 */}
          <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto mb-14">
            <img src="/tile-1.png" alt="Photo tiles on wall" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
            <img src="/tile-2.png" alt="Photo tiles on wall" className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md" referrerPolicy="no-referrer" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {t.pricingCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className={`relative bg-white rounded-3xl p-8 border-2 transition-all shadow-sm flex flex-col ${card.isPopular ? 'border-[#FF7E66] shadow-[#FF7E66]/20 shadow-xl lg:scale-105 z-10' : 'border-gray-100 hover:border-gray-200'
                  }`}
              >
                {card.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#FF7E66] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md w-max">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <span className="text-sm font-black text-gray-400 uppercase tracking-wider">{card.title}</span>

                  {/* 정상가(취소선) + 할인가 */}
                  <div className="flex items-center justify-center gap-2 mt-4 mb-1">
                    <span className="text-gray-300 line-through font-bold text-lg">{card.oldPrice}</span>
                    <span className="text-4xl font-black text-[#3D2B26]">{card.price}</span>
                  </div>

                  {/* 장당 가격 (구매욕 자극: 장당 얼마인지) */}
                  <p className="text-xs text-gray-400 font-bold mb-3">
                    {card.qty} {lang === 'EN' ? 'tiles' : 'ชิ้น'} · {card.perTile} {t.pricingPerTileLabel}
                  </p>

                  {/* 할인율 + 무료배송 뱃지 */}
                  <div className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="inline-block bg-[#FF6F91]/20 text-[#b89a1f] text-xs font-black px-3 py-1 rounded-full">
                      {card.discount}
                    </span>
                    {card.freeShip && (
                      <span className="inline-flex items-center gap-1 bg-[#FFF0E8] text-[#E04A6E] text-xs font-black px-3 py-1 rounded-full">
                        <Truck size={12} /> {t.pricingFreeShip}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="text-sm text-gray-500 space-y-3 mb-8 flex-1">
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF7E66]">✔</span> {card.qty} {t.pricingTilesLabel}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF7E66]">✔</span> {t.pricingBorderless}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#FF7E66]">✔</span> {card.freeShip ? t.pricingFreeShip : t.pricingNoNails}
                  </li>
                </ul>

                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`w-full py-3 rounded-xl font-bold transition-all ${card.isPopular ? 'bg-[#3D2B26] text-white hover:bg-[#2A211C]' : 'bg-gray-100 text-[#3D2B26] hover:bg-gray-200'
                  }`}>
                  {t.pricingCta}
                </button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-[11px] text-gray-400 mt-8 max-w-xl mx-auto">{t.pricingNote}</p>
        </div>
      </section>

      {/* 포토북 가격 — Pricing */}
      <PhotobookSection lang={lang} mode="pricing" />

      </>)}

      {page === 'home' && (<>
      {/* Brand Story */}
      <section className="px-8 md:px-12 py-16 bg-white border-t border-gray-100 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 block mb-6">Our Story</span>
          <blockquote className="text-xl md:text-2xl font-light leading-relaxed text-[#3D2B26] italic mb-6">
            &ldquo;{t.brandStoryQuote}&rdquo;
          </blockquote>
          <p className="text-sm font-bold text-[#3D2B26] uppercase tracking-widest mb-12">— <span className="text-[#3D2B26]">Memo</span><span className="text-[#FF7E66]">T</span><span className="text-[#FFB59E]">il</span><span className="text-[#FF6F91]">e</span></p>
        </motion.div>
      </section>

      </>)}

      {page === 'contact' && (<>
      {/* Contact */}
      <section className="px-8 md:px-12 py-16 bg-white border-t border-gray-100 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center mb-8">{t.contactTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-20">
            {([
              { icon: <User size={20} />, label: lang === 'EN' ? 'Representative' : 'ผู้แทน', value: 'Benjamin', href: undefined, hoverBorder: 'hover:border-[#3D2B26]', iconBg: 'bg-gray-100', iconColor: 'text-[#3D2B26]' },
              { icon: <Mail size={20} />, label: 'Email', value: 'official@memotile.com', href: 'mailto:official@memotile.com', hoverBorder: 'hover:border-[#FF7E66]', iconBg: 'bg-[#FFF0E8]', iconColor: 'text-[#FF7E66]' },
              { icon: <Instagram size={20} />, label: 'Instagram', value: '@memotile_studio', href: 'https://instagram.com/memotile_studio', hoverBorder: 'hover:border-[#FFB59E]', iconBg: 'bg-green-50', iconColor: 'text-[#6aaa7a]' },
              { icon: <MessageCircle size={20} />, label: 'Line', value: '@memotile', href: 'https://line.me/ti/p/@946zhley', hoverBorder: 'hover:border-[#FF6F91]', iconBg: 'bg-yellow-50', iconColor: 'text-[#b89a1f]' },
            ] as { icon: React.ReactNode; label: string; value: string; href: string | undefined; hoverBorder: string; iconBg: string; iconColor: string }[]).map((item, i) => {
              const cardClass = `bg-white rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-gray-200 ${item.hoverBorder} transition-colors shadow-sm block w-full`;
              const inner = (
                <>
                  <div className={`w-10 h-10 ${item.iconBg} rounded-full flex items-center justify-center ${item.iconColor}`}>
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{item.label}</span>
                  <span className="text-sm font-bold text-[#3D2B26] break-all">{item.value}</span>
                </>
              );
              return item.href ? (
                <motion.a key={i} href={item.href} target="_blank" rel="noopener noreferrer" whileHover={{ y: -4 }} className={`${cardClass} cursor-pointer relative z-20`}>
                  {inner}
                </motion.a>
              ) : (
                <motion.div key={i} whileHover={{ y: -4 }} className={`${cardClass} relative z-10`}>
                  {inner}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* FAQ Accordion */}
      <section className="px-8 md:px-12 py-16 bg-gray-50 border-t border-gray-100 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 text-center mb-8">{t.faqTitle}</h3>
          <div className="flex flex-col gap-3">
            {t.faqItems.map((item, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-bold text-[#3D2B26]">{item.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#FF7E66] flex-shrink-0"
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pt-2 text-[13px] text-[#3D2B26] opacity-70 leading-relaxed border-t border-gray-50">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      </>)}

      {/* Footer bar */}
      <footer className="bg-white px-8 md:px-12 py-8 border-t border-gray-100 flex flex-col items-center gap-6">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="text-xs" />
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight mt-1">{t.footerBrand}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[11px] font-bold text-gray-500 uppercase tracking-wide">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 tracking-[0.2em] text-[9px] font-black">Email</span>
              <a href="mailto:official@memotile.com" className="hover:text-[#FF7E66] transition-colors relative z-20">official@memotile.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#FF7E66] tracking-[0.2em] text-[9px] font-black">Line Official</span>
              <a href="https://line.me/ti/p/@946zhley" target="_blank" rel="noopener noreferrer" className="bg-green-50 text-[#6aaa7a] px-3 py-1 rounded-full text-[10px] hover:bg-green-100 transition-colors cursor-pointer relative z-20">
                @memotile
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-gray-400 border-t border-gray-50 pt-6 w-full justify-center flex-wrap">
          {/* 모달 대신 독립 URL로 — 심사자가 링크를 그대로 제출·공유할 수 있어야 한다 */}
          <a href="/privacy" className="hover:text-[#FF7E66] transition-colors relative z-20">
            {t.footerPrivacy}
          </a>
          <span className="text-gray-200">|</span>
          <a href="/terms" className="hover:text-[#FF7E66] transition-colors relative z-20">
            {t.footerTerms}
          </a>
          <span className="text-gray-200">|</span>
          <a href="/data-deletion" className="hover:text-[#FF7E66] transition-colors font-bold relative z-20">
            {t.footerDeletion}
          </a>
        </div>
      </footer>

    </div>
  );
}
