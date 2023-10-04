import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './Routes/Routes'
import './index.css'
import AuthProviders from './AuthProviders/AuthProviders'

import {RouterProvider} from "react-router-dom"

 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
    <RouterProvider router={router} />
   </AuthProviders>
   
  </React.StrictMode>,
)
