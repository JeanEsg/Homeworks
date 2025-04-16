import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CounterApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp title="My First Counter App" value={10} />
  </StrictMode>,
)
