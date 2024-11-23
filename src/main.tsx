import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ReactQueryClientProvider } from '@/lib/react-query'
import './index.css'
import { HookFormProvider } from './lib/form/index.tsx'
import { AuthProvider } from './features/auth/context/index.tsx'
import { CartProvider } from './features/cart/components/Cart/context/index.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <HookFormProvider>
        <AuthProvider>
          <CartProvider>
            <App />
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </HookFormProvider>
    </ReactQueryClientProvider>
  </StrictMode>
)
