import React from 'react'
import ReactDOM from 'react-dom/client'
import {ClientRouter} from './app/router.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClientRouter />
  </React.StrictMode>,
)
