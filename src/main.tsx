import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ReactQueryClientProvider } from '@/lib/react-query'
import './index.css'
import { HookFormProvider } from './lib/form/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <HookFormProvider>
        <App />
      </HookFormProvider>
    </ReactQueryClientProvider>
  </StrictMode>
)
