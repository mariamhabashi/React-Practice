import React from 'react'
import avatar from '../assets/avatar.jpg'; 
export default function Home() {
  return (
    <header className="home-section text-center section-padding">
        <div className="container d-flex align-items-center flex-column">
            <img className="avatar" src={avatar} alt="Avatar"/>
            <h1 className="text-uppercase mb-0">Mariam El-Habashi</h1>
            <div className="star-divider">
                <div className="line"></div>
                <div className="icon"><i className="fas fa-star"></i></div>
                <div className="line"></div>
            </div>
            <p className="font-weight-light mb-0">Data Scientist - Web Designer - Php Developer</p>
        </div>
    </header>
  )
}