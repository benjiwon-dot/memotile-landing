// memotile-landing-page/src/LegalPage.tsx
//
// /privacy · /terms — Meta 심사자가 URL로 바로 여는 공개 페이지.
// 기존엔 모달이라 URL이 없어 심사에 제출할 수 없었다. 문구는 translations 한 곳에서
// 가져오므로 모달 시절과 내용이 동일하고, 앞으로도 한 곳만 고치면 된다.
import { useState } from 'react';
import { translations, type Language } from './translations';

type Doc = 'privacy' | 'terms';

export default function LegalPage({ doc }: { doc: Doc }) {
  // 메인 사이트와 동일하게 TH 기본. 이 페이지는 독립 진입점이라 자체 상태를 갖는다.
  const [lang, setLang] = useState<Language>('TH');
  const t = translations[lang];

  const title = doc === 'privacy' ? t.privacyPolicyTitle : t.termsTitle;
  const sections = doc === 'privacy' ? t.privacyPolicy : t.termsOfService;

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
          {/* 언어 토글 — 메인 네비와 동일한 모양 */}
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

      <main className="max-w-3xl mx-auto px-6 py-10 sm:py-14 w-full flex-1">
        <h1 className="text-2xl sm:text-3xl font-black text-[#3D2B26] leading-tight mb-8">
          {title}
        </h1>

        <div className="space-y-5">
          {sections.map((s, i) => (
            <section key={i} className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
              <h2 className="text-base sm:text-lg font-black text-[#3D2B26] leading-snug">{s.title}</h2>
              <p className="mt-2 text-sm sm:text-[15px] text-gray-600 leading-relaxed whitespace-pre-line">{s.body}</p>
            </section>
          ))}
        </div>

        {/* 문서 간 이동 — 심사자가 한 페이지에서 나머지도 확인할 수 있게 */}
        <nav className="mt-10 flex flex-wrap items-center gap-3 text-xs text-gray-400">
          {doc !== 'privacy' && (
            <a href="/privacy" className="hover:text-[#FF7E66] transition-colors">{t.footerPrivacy}</a>
          )}
          {doc !== 'terms' && (
            <a href="/terms" className="hover:text-[#FF7E66] transition-colors">{t.footerTerms}</a>
          )}
          <a href="/data-deletion" className="hover:text-[#FF7E66] transition-colors font-bold">{t.footerDeletion}</a>
          <span className="text-gray-200">|</span>
          <a href="/" className="hover:text-[#FF7E66] transition-colors">Home</a>
        </nav>
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-6 text-xs text-gray-400">
          © {new Date().getFullYear()} MemoTile · official@memotile.com
        </div>
      </footer>
    </div>
  );
}
