import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Suspense } from 'react'

import './i18next.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback="Loading...">
      <App />
    </Suspense>
  </React.StrictMode>,
)
