import React, { Children } from 'react';
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Parent from './Components/Parent/Parent'
import Child from './Components/Child/Child'
import Contact from './Components/Contact/Contact'
import Gallery from './Components/Gallery/Gallery';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/Notfound/NotFound';
import Web from './Components/Web/Web';
import Mobile from './Components/Mobile/Mobile';
import Ux from './Components/Ux/Ux';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
let router= createBrowserRouter([
  {path:"",element:<Layout></Layout>,
      children:[
        {index:true,element:<Home></Home>}, 
        {path:"/about",element:<About></About>},
        {path:"/contact",element:<Contact></Contact>},
        {path:"/gallery",element:<Gallery></Gallery>, 
          children:[
            {path:"web",element:<Web/>},
            {path:"mobile",element:<Mobile/>},
            {path:"ux",element:<Ux/>}
        ]},
        {path:"*",element:<NotFound></NotFound>},
      ],
  },
]);
  

function App() {
    return(
      <>
      {/* <Parent></Parent> */}
        {/* <h1>App1</h1> */}

         <RouterProvider router={router} />
        {/* <Home></Home>
        <About></About>
        <Contact/> */}
      </>
    ) 
}

export default App
