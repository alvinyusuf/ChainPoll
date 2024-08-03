import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { WalletProvider } from './contexts/WalletContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WalletProvider>
      <RouterProvider router={router} />
    </WalletProvider>
  </React.StrictMode>,
)
