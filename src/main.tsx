import React from 'react';
import ReactDOM from 'react-dom/client';
import CursorFollow from './CursorFollow';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <CursorFollow />
  </React.StrictMode>
);
