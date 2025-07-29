import React from 'react'

export default function Contact() {
  return (
    <section className="contact-section section-padding">
      <div className="container">
        <h2 className="text-center text-uppercase">CONTACT SECTION</h2>
        <div className="star-divider dark">
            <div className="line"></div>
            <div className="icon"><i className="fas fa-star"></i></div>
            <div className="line"></div>
        </div>

        <form className="contact-form w-75 mx-auto mt-5">
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="userName" placeholder="userName" />
                <label htmlFor="userName">userName</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="userAge" placeholder="userAge" />
                <label htmlFor="userAge">userAge</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="userEmail" placeholder="userEmail" />
                <label htmlFor="userEmail">userEmail</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="userPassword" placeholder="userPassword" />
                <label htmlFor="userPassword">userPassword</label>
            </div>

            <button type="submit" className="btn btn-send">Send Message</button>
        </form>

      </div>
    </section>
  )
}