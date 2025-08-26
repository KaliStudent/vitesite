import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Example from './src/App.portfoliotemplate'
import KombaiWrapper from './KombaiWrapper'
import ErrorBoundary from '@kombai/react-error-boundary'
import './index.css'
import './styles/themes.css';
document.documentElement.setAttribute('data-theme', 'royal-slate'); // pick any of the 20

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <KombaiWrapper>
        <Example />
      </KombaiWrapper>
    </ErrorBoundary>
  </StrictMode>,
)
