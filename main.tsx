// Ensure the theme stylesheet is loaded even if index.html didn't link it
if (!document.querySelector('link[href="/themes.css"]')) {
  const l = document.createElement('link');
  l.rel = 'stylesheet';
  l.href = '/themes.css';
  document.head.appendChild(l);
}

// Pick any of the 20 themes
document.documentElement.setAttribute('data-theme', 'sapphire-ice');
import Example from './src/App.portfoliotemplate'
import './index.css';
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KombaiWrapper from './KombaiWrapper'
import ErrorBoundary from '@kombai/react-error-boundary'
import './public/themes.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <KombaiWrapper>
          <Example/>
      </KombaiWrapper>
    </ErrorBoundary>
  </StrictMode>,
)
