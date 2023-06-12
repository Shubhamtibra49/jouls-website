import React from 'react'
import './contact.css';
import photo from './photo.png'
import photo1 from './photo2.jpg'
import photo3 from './spring.jpg'
import photo4 from './Ellipse4.jpeg'
import photo5 from './Ellipse6.jpeg'
import photo6 from './Ellipse7.jpeg'
const contact = () => {
  return (
    <div>
      <div className=" row container">
        <div className="col-md-6" style={{fontSize:'20px', paddingLeft:'100px'}}>
          <p class="heading fw-bolder">Get in touch</p>
          <p class="content fw-bolder">Have a specific inqury? Here's a few ways you can get in  touch with us .</p>
        </div>
        <div className="col-md-6">
          <img src={photo} class="photo" style={{width:'500px', height:'400px', marginLeft:'290px'}}alt="" />
        </div>
      </div>
    
      <div className="Container row d-flex  mt-4  " >
    
          <div className="card3 col-md-4 mt-4  shadow border-0 " style={{ width: "18rem" }}>
          
            <h5 className="fw-bolder my-2">Contact Support</h5>
            <h3>Our support team typically responds within a few minutes.</h3>
            <button type="button" class="btn btn-light my-3">Start a conversation</button>
          </div>
          <div className="card4 col-md-4 mt-4 shadow border-0" style={{ width: "18rem" }}>
            
            <h5 className=" fw-bolder my-2">Contact sales</h5>
            <h3>Interested in EcoSpark ? Or want to know more about Jouls ?</h3>
            <button type="button" class="btn btn-light my-3">Start a conversation</button>
          </div>
       
          
         
        </div>
        <div className="container row d-flex ">
          <div className="card5 col-md-6 mt-5 shadow border-0" style={{ width: "18rem" }}>
          
            <h5 className="fw-bolder my-3">General Inquires</h5>
            <h3  >Need to get in touch with the team about company and products? We're all ears at </h3>  <h3 className=" text-success"> amangoyal6377@gmail.com</h3>
       </div>
        <div className="springpic col-md-6">
          <img src={photo3} class="springpic1" style={{width:"400px",marginLeft:"500px"}} alt="" />
        </div>
          </div>
       
       
        <div className="row container mt-5" >
          <div className="col-md-6" style={{fontSize:'20px'}}>
            <p class="subhead1 fw-bolder" style={{marginLeft:'70px' }}>Where we work</p>
          </div>

          <div class="col-md-6 image-container">
  <img src={photo1} alt="Background Image" style={{width:'450px', height:'500px', marginLeft:'250px', marginTop:'140px'}}/>
  <div class="overlay-card ">
    <h2 class="fw-bolder" >R & D</h2>
    <p  >Malviya Innovation & Incubation Center ,MNIT, Jaipur, Rajasthan(3012017) </p><p  className=" text-success">+91 6377 650 430</p>
  </div>
</div>
        </div>
        <div className="row container mt-5">
          <div class="col-md-6 image-container">
  <img src={photo1} alt="Background Image" style={{width:'450px', height:'500px', marginLeft:'100px'}}/>
  <div class="card2 overlay-card">
    <h2 class="fw-bolder" style={{ opacity: "100%"}} >R & D</h2>
    <p>Flat no.177, Second Floor Block C, South City 2, Gurugram, Haryana, IN(122018)</p>
  </div>
</div>
          <div className="col-md-6" >
           
          </div>
        </div>



    <div className="container  " style={{marginTop:"190px"}}>
        
        <div className=" container row d-flex  ">
         <div className='photo4 col-md-4'>
           <img src={photo4} alt="" />
         </div>
         <div className='text6 col-md-4'>
          <p class="fw-bolder" style={{fontSize:'60px'}}>Join our team</p>
          </div>
          <div className=' photo5 col-md-4'>
          <img src={photo5} alt="" />
          </div>
        </div>
        
        <div className='text-center'>
          <p class="fw-bolder fs-5">We always looking for rockstars to join our team. Think you'd be a good fit? </p>
         </div>
        
         <div className=" container row d-flex  ">
         <div className='photo4 col-md-4'>
           <img src={photo5} alt="" />
         </div>
         <div className='button2 col-md-4'>
        <button className="btn btn-success ">View open roles</button> 
          </div>
          <div className=' photo5 col-md-4'>
          <img src={photo6} alt="" />
          </div>
        </div>
          
       
        
   </div>
   
   
   
   
    </div>
  )
}

export default contact