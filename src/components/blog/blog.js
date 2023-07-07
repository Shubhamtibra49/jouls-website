import React from 'react'
import './blog.css'
import Carousel from './Carousel.js';
import burger from './bggone.jpeg';
import pasta from './bggtwo.jpeg';



const Blog = () => {

  return (
    
      <>
<div class='bcolor'>
<div class=''>
    <div class=" container header  ">
  <div class="mx-5 headerTitles">
    <div class="headerTitleLg">Discover the world of EVs</div>
    <div class="headerTitleSm" >
      Uncover the world of EVs, sustainable mobility, and solar power 
      through our informative blogs. Stay updated on EV technology, charging 
      solutions and sustainability trends for a greener future.
    </div>
  </div>
  </div>
</div>




        <div className=' row d-flex  mx-auto ' >
        <div className='col-md-6 '>
          <Carousel />
        </div>
          <div className="container cardsize col-md-6">
            <div class=" joji shadow card  " style={{ maxWidth: "600px" }} >
              <div class="row g-0 " >
                <div class="col-md-5 align-self-center" >
                  <img src={burger} class="img-fluid rounded-start" alt="..." style={{ maxHeight: 'auto' }} />
                </div>
                <div class="  col-md-7">
                  <div class=" card-body" style={{}}>
                    <h5 class="card-title d-flex">Making India EV ready</h5>
                    <p class="card-text">EESL recently announced ramping up EV charging infrastructure in the country by setting up 2,000 EV charging facilities by March 2021. </p>
                    <a href="https://etn.news/interviews/making-india-ev-ready-1-1">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class=" joji shadow card  " style={{ maxWidth: "600px" }} >
              <div class="row g-0" >
                <div class="col-md-6 align-self-center">
                  <img src={pasta} class="img-fluid rounded-start" alt="..." style={{ maxHeight: 'auto' }} />
                </div>
                <div class="  col-md-6">
                  <div class=" card-body" >
                    <h5 class="card-title d-flex">Electric four-wheelers: Steering into the next phase of sustainable transportation</h5>
                    <p class="card-text">The global automotive industry is on the edge of disruption. Four technology-driven trends — electrification, shared mobility, connectivity, and autonomous driving—are leading the automotive industry to this disruption. </p>
                    <a href="https://etn.news/interviews/making-india-ev-ready-1-1">Read more</a>
                  </div>
                </div>
              </div>
            </div>
           
          </div>



        </div>

        </div>








      </>


    











  )
}






export default Blog