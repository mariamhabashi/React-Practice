import React from 'react'

export default function About() {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <h2 className="text-center text-uppercase">ABOUT COMPONENT</h2>
        <div className="star-divider">
            <div className="line"></div>
            <div className="icon"><i className="fas fa-star"></i></div>
            <div className="line"></div>
        </div>
        <div className="row">
          <div className="col-lg-6 ms-auto">
            <p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-lg-6 me-auto">
            <p className="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </section>
  )
}