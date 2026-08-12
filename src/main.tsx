import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import DataDeletionPage from './DataDeletionPage.tsx';
import LegalPage from './LegalPage.tsx';
import './index.css';

// 경로 분기 — vercel.json이 모든 요청을 index.html로 rewrite하므로 여기서 pathname을 본다.
// 아래 세 경로는 Meta/스토어 심사자가 URL로 바로 열어야 하는 공개 문서라
// 모달이 아니라 독립 진입점으로 둔다(App 안에서 분기하면 조기 return이 훅 규칙에 걸린다).
const path = window.location.pathname.replace(/\/+$/, '');

function Root() {
  switch (path) {
    case '/data-deletion': return <DataDeletionPage />;
    case '/privacy':       return <LegalPage doc="privacy" />;
    case '/terms':         return <LegalPage doc="terms" />;
    default:               return <App />;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
