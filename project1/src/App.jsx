import './App.css';

import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Layout from './Components/Layout/Layout.jsx';
import Home from './Components/Home.jsx';
import Portfolio from './Components/Portfolio.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


let router = createBrowserRouter([
  {
    path: "", 
    element: <Layout />, 
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;