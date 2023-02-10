import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//전역적으로 css 적용하는 방법.
import './styles.css';

// 모든 컴포넌트가 최종적으로 여기서 모이고
// public의 index.html 파일을 기준으로 렌더링을 실시함.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
