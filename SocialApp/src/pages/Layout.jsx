import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../pages/Navbar';
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col justify-between">
        <Navbar/>
        <div className="container">
            <Outlet/>
        </div>
        {/* <Footer/> */}
    </div>
  )
}
