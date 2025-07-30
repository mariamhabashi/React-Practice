import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'

function App() {
  const routes = createBrowserRouter([
    {path:'/' , element:<Layout/>,children:[
      {index:true,element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'/home',element:<Home/>},
      {path:'*',element:<NotFound/>}
    ]}
  ])
 

  return (
    <RouterProvider router={routes}>
      
    </RouterProvider>
  )
}

export default App
