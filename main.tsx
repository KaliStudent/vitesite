document.documentElement.setAttribute('data-theme', 'sapphire-ice');
import './index.css';
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import KombaiWrapper from './KombaiWrapper'
import ErrorBoundary from '@kombai/react-error-boundary'
import './src/styles/themes.css';
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
