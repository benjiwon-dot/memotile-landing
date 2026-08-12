// memotile-landing-page/src/DataDeletionPage.tsx
//
// /data-deletion — Meta 앱 심사의 "Data Deletion Instructions URL"로 제출하는 공개 페이지.
// 로그인·상태 의존이 전혀 없어야 하고(심사자가 바로 열어봄), 한/영 병기로 둘 다 항상 보이게 한다.
// 사이트 다른 문서는 모달이라 URL이 없어 심사에 쓸 수 없어 별도 라우트로 만들었다.
import type { ReactNode } from 'react';
import { Mail, Smartphone, ShieldCheck, Clock } from 'lucide-react';

const SUPPORT_EMAIL = 'official@memotile.com';

/** 한/영 한 쌍. ko가 위(굵게), en이 아래(회색) — 심사자는 en만 읽어도 이해되게 */
function Pair({ ko, en, className = '' }: { ko: string; en: string; className?: string }) {
  return (
    <div className={className}>
      <p className="text-[#3D2B26] leading-relaxed">{ko}</p>
      <p className="text-gray-500 leading-relaxed mt-1">{en}</p>
    </div>
  );
}

function Card({
  icon, ko, en, children,
}: { icon: ReactNode; ko: string; en: string; children?: ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-[#FFF0E8] text-[#FF7E66] flex items-center justify-center">
          {icon}
        </div>
        <div className="min-w-0">
          <h2 className="text-lg sm:text-xl font-black text-[#3D2B26] leading-snug">{ko}</h2>
          <p className="text-sm text-gray-500 font-semibold mt-0.5">{en}</p>
        </div>
      </div>
      {children && <div className="mt-5 space-y-4 text-sm sm:text-[15px]">{children}</div>}
    </section>
  );
}

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F4] text-[#262626] font-sans">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="/" className="font-black tracking-tight uppercase text-xl flex items-center">
            <span className="text-[#3D2B26]">Memo</span>
            <span className="text-[#FF7E66]">t</span>
            <span className="text-[#FFB59E]">il</span>
            <span className="text-[#FF6F91]">e</span>
          </a>
          <a href="/" className="text-sm text-gray-500 hover:text-[#FF7E66] transition-colors">
            홈으로 · Home
          </a>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 sm:py-14 space-y-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#3D2B26] leading-tight">
            MemoTile 계정 및 데이터 삭제 방법
          </h1>
          <p className="text-base sm:text-lg text-gray-500 font-semibold mt-1">
            How to Delete Your MemoTile Account and Data
          </p>
          <Pair
            className="mt-4 text-sm sm:text-[15px]"
            ko="아래 두 가지 방법 중 하나로 계정과 관련 데이터를 삭제하실 수 있습니다."
            en="You can delete your account and associated data using either of the two methods below."
          />
        </div>

        <Card
          icon={<Smartphone size={20} />}
          ko="방법 1 · 앱에서 직접 삭제"
          en="Option 1 · Delete in the app"
        >
          {/* 경로는 앱의 실제 화면과 반드시 일치해야 한다 — 심사자가 그대로 따라가 본다.
              app/(tabs)/profile.tsx 기준: 프로필 탭 → Legal 섹션 → Delete Account */}
          <Pair
            ko="MemoTile 앱에 로그인한 뒤 [프로필 탭 → Legal(กฎหมายและข้อกำหนด) → Delete Account(ลบบัญชี)] 를 선택하면 즉시 삭제가 시작됩니다."
            en="Sign in to the MemoTile app, then go to [Profile tab → Legal → Delete Account]. Deletion begins immediately."
          />
        </Card>

        <Card
          icon={<Mail size={20} />}
          ko="방법 2 · 이메일로 요청"
          en="Option 2 · Request by email"
        >
          <Pair
            ko={`가입하신 이메일 주소를 적어 ${SUPPORT_EMAIL} 으로 삭제를 요청해 주세요. 영업일 기준 7일 이내에 처리해 드립니다.`}
            en={`Email ${SUPPORT_EMAIL} with the email address you signed up with. We will process your request within 7 business days.`}
          />
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent('Account & Data Deletion Request')}`}
            className="inline-flex items-center gap-2 bg-[#FF7E66] text-white font-bold px-5 py-3 rounded-xl hover:brightness-105 transition"
          >
            <Mail size={16} />
            삭제 요청 메일 보내기 · Send deletion request
          </a>
        </Card>

        <Card
          icon={<ShieldCheck size={20} />}
          ko="삭제되는 데이터"
          en="What gets deleted"
        >
          <ul className="space-y-3">
            {[
              ['계정 정보 (이메일, 프로필)', 'Account information (email, profile)'],
              ['업로드하신 사진', 'Photos you uploaded'],
              ['얼굴 인식 임베딩 데이터', 'Face recognition embedding data'],
              ['주문 내역', 'Order history'],
            ].map(([ko, en]) => (
              <li key={en} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FF7E66] shrink-0" />
                <Pair ko={ko} en={en} />
              </li>
            ))}
          </ul>
          <div className="rounded-xl bg-[#FFF8F4] border border-[#FFE3D8] p-4">
            <Pair
              ko="단, 법령상 보관 의무가 있는 결제·세금 기록은 관련 법에 따라 정해진 기간 동안 보관됩니다."
              en="However, payment and tax records that we are legally required to retain will be kept for the period required by applicable law."
            />
          </div>
        </Card>

        <Card
          icon={<Clock size={20} />}
          ko="Facebook 로그인으로 가입하신 경우"
          en="If you signed up with Facebook Login"
        >
          <Pair
            ko="Facebook 계정으로 가입하신 경우에도 위 절차가 동일하게 적용됩니다. 삭제 요청 시 MemoTile이 보관하던 회원님의 데이터는 모두 삭제되며, Facebook 계정 자체에는 영향을 주지 않습니다."
            en="The same process applies if you signed up using Facebook Login. All data MemoTile holds about you will be deleted. Your Facebook account itself is not affected."
          />
        </Card>

        <section className="pt-2">
          <Pair
            className="text-sm"
            ko={`문의: ${SUPPORT_EMAIL}`}
            en={`Contact: ${SUPPORT_EMAIL}`}
          />
        </section>
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-6 text-xs text-gray-400">
          © {new Date().getFullYear()} MemoTile
        </div>
      </footer>
    </div>
  );
}
