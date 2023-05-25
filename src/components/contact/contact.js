import React from 'react'
import './contact.css';
import photo from './photo.png'
import photo1 from './photo2.jpg'

const contact = () => {
  return (
    <div>
      <div className=" row container">
        <div className="col-md-6" style={{fontSize:'20px', paddingLeft:'100px'}}>
          <p class="heading fw-bolder">Get in touch</p>
          <p class="content fw-bolder">Have a specific inqury? Here's a few ways you can get in  touch with us .</p>
        </div>
        <div className="col-md-6">
          <img src={photo} class="photo" style={{width:'500px', height:'400px', marginLeft:'150px'}}alt="" />
        </div>
      </div>
    
      <div className="Container row d-flex justify-content-evenly mt-4">
    
          <div className="card col-md-4 mt-4 shadow border-0 " style={{ width: "18rem" }}>
          
            <h5 className="fw-bolder my-2">Contact Support</h5>
            <h3>our support team typically responds within a few minutes.</h3>
            <button type="button" class="btn btn-light my-3">Start a conversation</button>
          </div>
          <div className="card col-md-4 mt-4 shadow border-0" style={{ width: "18rem" }}>
            
            <h5 className=" fw-bolder my-2">Contact sales</h5>
            <h3>interested in learning more about joyuls?</h3>
            <button type="button" class="btn btn-light my-3">Start a conversation</button>
          </div>
          <div className="card col-md-4 mt-4 shadow border-0" style={{ width: "18rem" }}>
          
            <h5 className="fw-bolder my-2 ">General Inquires</h5>
            <h3 >Need to get in touch with the team about company and products? We're all ears at </h3>  <h3 className=" text-success"> amangoyal6377@gmail.com</h3>
          </div>
         
        </div>
        <div className="row container mt-5" >
          <div className="col-md-6" style={{fontSize:'20px'}}>
            <p class="subhead1 fw-bolder" style={{marginLeft:'70px' }}>Where we work</p>
          </div>
          <div class="col-md-6 image-container">
  <img src={photo1} alt="Background Image" style={{width:'400px', height:'450px', marginLeft:'250px', marginTop:'50px'}}/>
  <div class="overlay-card ">
    <h2 class="fw-bolder" >R & D</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
        </div>
        <div className="row container mt-5">
          <div class="col-md-6 image-container">
  <img src={photo1} alt="Background Image" style={{width:'400px', height:'450px', marginLeft:'100px'}}/>
  <div class="card2 overlay-card">
    <h2 class="fw-bolder" style={{ opacity: "100%"}} >R & D</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
          <div className="col-md-6" >
           
          </div>
        </div>
        <div className="container text-center my-5">
          <p class="fw-bolder" style={{fontSize:'60px'}}>Join our team</p>
          <p class="fw-bolder fs-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt numquam molestias blanditiis earum, mollitia consequuntur!</p>
          <button className="btn btn-success">View open roles</button>
        </div>
    </div>
  )
}

export default contact
