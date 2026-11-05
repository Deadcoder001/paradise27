import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Suppress benign ResizeObserver loop limit notifications in WebKit/Safari & Chromium
if (typeof window !== 'undefined') {
  const isResizeLoopError = (msg) => {
    return (
      typeof msg === 'string' &&
      (msg.includes('ResizeObserver loop completed with undelivered notifications') ||
        msg.includes('ResizeObserver loop limit exceeded'))
    );
  };

  window.addEventListener('error', (event) => {
    if (isResizeLoopError(event?.message) || isResizeLoopError(event?.error?.message)) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    if (isResizeLoopError(event?.reason?.message)) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
