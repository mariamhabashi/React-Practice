import React from 'react'
import cabinImg from '../assets/cabin.png'
import circusImg from '../assets/circus.png'
import gameImg from '../assets/game.png'


export default function Portfolio() {
  const portfolioItems = [
    { id: 1, src: cabinImg },
    { id: 2, src: gameImg },
    { id: 3, src: circusImg },
    { id: 4, src: cabinImg },
    { id: 5, src: gameImg },
    { id: 6, src: circusImg },
  ];

  return (
    <section className="portfolio-section section-padding">
      <div className="container">
        <h2 className="text-center text-uppercase">PORTFOLIO COMPONENT</h2>
        <div className="star-divider dark">
            <div className="line"></div>
            <div className="icon"><i className="fas fa-star"></i></div>
            <div className="line"></div>
        </div>

        <div className="row justify-content-center">
          {portfolioItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4">
              <div className="portfolio-item">
                <img className="img-fluid" src={item.src} alt="Portfolio Item" />
                <div className="layer">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}