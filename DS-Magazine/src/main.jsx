import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Articlelist from './Component/Articlelist.jsx'

import Home from './Component/Home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Home/>}>
      <Route path='/article' element={<Articlelist/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/> 
</React.StrictMode>,
)
