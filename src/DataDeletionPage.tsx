// memotile-landing-page/src/DataDeletionPage.tsx
//
// /data-deletion — Meta 앱 심사의 "Data Deletion Instructions URL"로 제출하는 공개 페이지.
// 로그인·상태 의존이 없어야 하고(심사자가 URL로 바로 열어봄), 언어는 /privacy·/terms와 같은
// EN/TH 토글로 통일한다(타겟 시장이 태국이라 한국어 독자가 없다).
// 문구는 translations.ts 한 곳에서 가져온다.
import { useState } from 'react';
import type { ReactNode } from 'react';
import { Mail, Smartphone, ShieldCheck, Facebook } from 'lucide-react';
import { translations, type Language } from './translations';

const SUPPORT_EMAIL = 'official@memotile.com';

function Card({ icon, title, children }: { icon: ReactNode; title: string; children?: ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FFF0E8] text-[#FF7E66] flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-base sm:text-lg font-black text-[#3D2B26] leading-snug pt-2">{title}</h2>
      </div>
      {children && <div className="mt-4 space-y-4 text-sm sm:text-[15px] text-gray-600 leading-relaxed">{children}</div>}
    </section>
  );
}

export default function DataDeletionPage() {
  // 메인 사이트·법적 문서와 동일하게 TH 기본. 독립 진입점이라 자체 상태를 갖는다.
  const [lang, setLang] = useState<Language>('TH');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#FFF8F4] text-[#262626] font-sans flex flex-col">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <a href="/" className="font-black tracking-tight uppercase text-xl flex items-center shrink-0">
            <span className="text-[#3D2B26]">Memo</span>
            <span className="text-[#FF7E66]">t</span>
            <span className="text-[#FFB59E]">il</span>
            <span className="text-[#FF6F91]">e</span>
          </a>
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-full text-[10px] font-bold border border-gray-200">
            {(['EN', 'TH'] as Language[]).map((L) => (
              <button
                key={L}
                onClick={() => setLang(L)}
                className={`px-3 py-1 rounded-full transition-all ${lang === L ? 'bg-white shadow-sm text-[#FF7E66]' : 'text-gray-500'}`}
              >
                {L}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 sm:py-14 w-full flex-1 space-y-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#3D2B26] leading-tight">
            {t.deletionTitle}
          </h1>
          <p className="mt-3 text-sm sm:text-[15px] text-gray-600 leading-relaxed">{t.ddIntro}</p>
        </div>

        <Card icon={<Smartphone size={20} />} title={t.ddOpt1Title}>
          <p>{t.ddOpt1Body}</p>
        </Card>

        <Card icon={<Mail size={20} />} title={t.ddOpt2Title}>
          <p>{t.ddOpt2Body}</p>
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Account & Data Deletion Request')}`}
            className="inline-flex items-center gap-2 bg-[#FF7E66] text-white font-bold px-5 py-3 rounded-xl hover:brightness-105 transition"
          >
            <Mail size={16} />
            {t.deletionButton}
          </a>
        </Card>

        <Card icon={<ShieldCheck size={20} />} title={t.ddWhatTitle}>
          <ul className="space-y-2.5">
            {t.ddWhatItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FF7E66] shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl bg-[#FFF8F4] border border-[#FFE3D8] p-4">
            {t.ddLegalHold}
          </div>
        </Card>

        <Card icon={<Facebook size={20} />} title={t.ddFacebookTitle}>
          <p>{t.ddFacebookBody}</p>
        </Card>

        <p className="text-sm text-gray-600 pt-2">{t.ddContact}</p>

        <nav className="pt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400">
          <a href="/privacy" className="hover:text-[#FF7E66] transition-colors">{t.footerPrivacy}</a>
          <a href="/terms" className="hover:text-[#FF7E66] transition-colors">{t.footerTerms}</a>
          <span className="text-gray-200">|</span>
          <a href="/" className="hover:text-[#FF7E66] transition-colors">Home</a>
        </nav>
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-6 text-xs text-gray-400">
          © {new Date().getFullYear()} MemoTile · {SUPPORT_EMAIL}
        </div>
      </footer>
    </div>
  );
}
