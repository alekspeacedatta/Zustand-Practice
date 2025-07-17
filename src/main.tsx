import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Product from './components/Product'
import User from './components/User'
import SelectedUser from './components/SelectedUser'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <User/>
      <SelectedUser/>
    </div>
    <Product/>
  </StrictMode>,
)
