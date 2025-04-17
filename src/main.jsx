import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProvider from './global/UseUser.jsx'
import { Toaster } from 'sonner'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <Toaster richColors position="top"/>
     <App />
    </UserProvider>
  </StrictMode>,
)
