import React from 'react'
import './footer.css'
import img2 from './download.jpeg'
import logo from './joulslogo.jpeg'
const footer = () => {
  return (
<>
<footer>
    <div class="footer-container">
      <div class="row">
      <div class="col-md-3">
      <div class="column">
        <div class="logo-container">
          <img src={logo} alt="Logo"/>
        </div>
        </div>   
      </div>
      <div class="col-md-3">
      <div class="column contactus">
        <h2 class='text-left ' style={{paddingBottom:"12px",textAlign:"center"}}>Contact Us</h2>
        <ul class="contact-info text-left ">
            <a href='#' style={{color:"#118615"}}><li>+91 6377 650 430</li></a>
            <a href='#' style={{color:"#118615"}} ><li>amangoyal6377@gmail.com</li></a>
            <a href='#'style={{color:"#118615"}} > <li> Malviya Innovation & Incubation Center, MNIT, Jaipur, Rajasthan(302017)</li></a>

           </ul>
           </div>
      </div>
      <div class="col-md-3">
      <div class="column">
        <h2 style={{paddingBottom:"12px",textAlign:"center"}}>Follow Us</h2>
        <div class="social-icons">
          <a href="#"><i class="fab fa-instagram" style={{color:"#118615" ,padding:"0 7px"}}></i></a>
          <a href="#"><i class="fab fa-facebook"style={{color:"#118615",padding:"0 7px"}}/></a>
          <a href="#"><i class="fab fa-linkedin"style={{color:"#118615",padding:"0 7px"}}></i></a>
          <a href="#"><i class="fab fa-twitter"style={{color:"#118615",padding:"0 7px"}}></i></a>
        </div>
      </div>
      </div>
      <div class="asdf col-md-3">
      <div class="column">
        <div class="app-download">
          <div class="row">
            <div class="app-icon">
              <a href="#"><img src={img2}alt="Available on App Store"/></a>
            </div>
            <div class="app-icon">
              <a href="#"><img src={img2} alt="Get it on Google Play"/></a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <p class="rights-reserved" style={{color:"black" , textAlign:"center"}}>	&#169; 2023 All Rights are Reserved under Jouls Ecotech Pvt. Ltd.</p>
  </footer>
</>
  )
}

export default footer