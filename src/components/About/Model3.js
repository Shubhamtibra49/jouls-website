import './Model3.css'
import Member1 from './aman1.jpeg';
import Member2 from './Chandni.jpg';
import Member3 from './harsh.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Model3() {
  return (
    <div id='model3' style={{background:'rgba(00,00,00,0.2)', paddingBottom:'30px'}}>
        <h1 className='model-title' style={{paddingTop:'85px', color:'black'}}>Meet the team</h1>
        <div className="divider" style={{backgroundColor:'black'}}></div>
        <div className="members">
          <div className="member">
            <img src={Member1}/>
            <div className="description">
                <h1>Aman Goyal</h1>
                <h2>Director</h2>
                <p>
               
                </p>
                <div className="social-media">
                  {/* <InstagramIcon /> */}
                <a href="https://www.linkedin.com/in/aman-goyal-7888aa187"  target = "_blank" rel="noreferrer"><LinkedInIcon /></a>  
                  {/* <PinterestIcon /> */}
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member2}/>
            <div className="description" style={{paddingTop:'px'}} >
                <h1>Chandni Gupta</h1>
                <h2>Director</h2>
                <p>
               
                </p>
                <div className="social-media">
                  {/* <InstagramIcon /> */}
                 <a href="https://www.linkedin.com/in/ca-chandni-gupta-46693110b" target = "_blank" rel="noreferrer"><LinkedInIcon /></a> 
                  {/* <PinterestIcon /> */}
                </div>
            </div>
          </div>
          <div className="member">
            <img width={200} height={200} src={Member3}/>
            <div className="description">
                <h1>Harsh Khosla</h1>
                <h2>Software Developer</h2>
                <p>
               
               </p>
                <div className="social-media">
                  {/* <InstagramIcon /> */}
                <a href="https://www.linkedin.com/in/harsh-khosla-298735249/" target = "_blank" rel="noreferrer"><LinkedInIcon /></a>  
                  {/* <PinterestIcon /> */}
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}
