import React from 'react';
import "./home.css"
import ecospark from './ecospark.jpeg'
function home() {
  return (
    <>
    <div className="topbg" >
    {/* <div className="" style={{maxWidth:"100%", height:"auto", top:"0"}}> */}
    <div class="d-flex justify-content-center " style={{ fontWeight:"bold",fontSize:"70px",marginTop:'',marginBottom:'', color:'#ddd' }}>
      
    <div style={{marginTop:"260px"}}>ENERGIZING</div>
    <div style={{marginTop:"370px", marginRight:'px'}}>GREENER</div>
    <div  style={{marginTop:"490px", marginRight:'px'}}>FUTURE</div>
    {/* <video src={untitled} control autoplay="true" loop="true" ></video> */}

    </div>
     </div>
     <div style={{marginTop:"100px"}}>
      <img src={ecospark} alt="" width="100%" height="auto"/>
     </div>
     </>
  )
}

export default home
