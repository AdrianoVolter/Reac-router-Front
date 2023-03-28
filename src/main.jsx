import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <App />,
  },
  {
    path: "/sobre",
    element: <Sobre/>,
  },
])
 
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
     
    
  </React.StrictMode>,
)
