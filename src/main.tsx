import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import DataDeletionPage from './DataDeletionPage.tsx';
import './index.css';

// 경로 분기 — vercel.json이 모든 요청을 index.html로 rewrite하므로 여기서 pathname을 본다.
// /data-deletion 은 Meta 앱 심사의 "Data Deletion Instructions URL"로 제출하는 공개 페이지라
// 로그인·상태 없이 URL만으로 바로 열려야 한다(App 안에서 분기하면 훅 규칙에 걸린다).
const path = window.location.pathname.replace(/\/+$/, '');
const Root = path === '/data-deletion' ? DataDeletionPage : App;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
