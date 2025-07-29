import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="main-footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4>LOCATION</h4>
              <p>Alexandria,Egypt<br />Cairo st ,604</p>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4>AROUND THE WEB</h4>
              <div className="social-icons">
                <a className="icon" href="https://www.facebook.com/mariam.mahmoud76"><i className="fab fa-fw fa-facebook-f"></i></a>
                <a className="icon" href="https://x.com/mariamhabshi17?s=11"><i className="fab fa-fw fa-twitter"></i></a>
                <a className="icon" href="https://www.linkedin.com/in/mariam-el-habashi-8416a3198/" ><i className="fab fa-fw fa-linkedin-in"></i></a>
                <a className="icon" href="https://github.com/mariamhabashi?tab=repositories"><i className="fab fa-fw fa-github"></i></a>
              </div>
            </div>
            <div className="col-md-4">
              <h4>ABOUT FREELANCER</h4>
              <p>Student at the faculty of computer science , trainee at Route Academy</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-below text-center">
        <div className="container">
          <small>Copyright © My Website 2024</small>
        </div>
      </div>
    </>
  )
}