import React from 'react'
import Exp from '../../assets/images/recuiter/Experience.png'
import certi from '../../assets/images/recuiter/certificates.png'
import proj from '../../assets/images/recuiter/Project.png'
import skill from '../../assets/images/recuiter/skills1.png'
import recom from '../../assets/images/recuiter/recomnd.png'
import './css/HeroSection.css';
import Recuiter from '../../assets/images/RecuiterHero.mp4'
import { Link } from 'react-router-dom'
import Head from '../Head'
import Footers from '../Footers'
import Links from '../Links'


function Indexcontainer() {
  return (
    
     <div>
        <div><Head></Head></div>
       <div>
       <div className='tophead' id='about'>
         <div className="darkmodevideo"></div>
         <video src={Recuiter} autoPlay loop muted ></video> 
       <div className="hero">
             <div className="overlay">
               <h1>Shifan  - Python Fullstack Developer</h1>
               <p>
                I am a Full Stack Developer with 1 year of hands-on experience, aiming to build efficient and user-focused applications. I am committed to continuous learning and growing my technical skills to contribute to impactful and innovative projects.
                 {/* You can include the full paragraph from the screenshot */}
               </p>
               <div className="buttons">
                 {/* <a href=""><img src={Exp}alt=""></img>
               <button>
                 className="play-btn"
                 onClick={() =>
                 window.location.href =
                 "https://drive.google.com/file/d/1atygADHmDYjrw8ae03LztXc6iXDDV-NQ/view?usp=drive_link"
               }
               </button>
       </a>
                ▶ Resume
                
             <a
               href="https://www.linkedin.com/in/shifan-a-"
             >
             <button className="linkedin-btn">LinkedIn</button>
             </a> */}
               </div>
             </div>
           </div>
         </div>
       
           </div>
    <div className="location" id="home">
        {/* <div className=''><h1 id="">Todays pick for you</h1></div> */}
        <div style={{ textAlign: "left", paddingLeft:"20px" }}>
          <a href=""><img className='certiimg' src={Exp}alt=""  style={{ "height":"175px","width":"290px","filter": "brightness(0.9)", "padding-right":"20px"}}/></a>
          {/* <div className='cardtext1'><h1>Experience</h1></div> */}
          <a href=""><img src={certi} alt="certificates"  style={{ "height":"175px","width":"290px", "padding-right":"20px"}}/></a>
          {/* <div className='cardtext2'><h1>Certificate</h1></div> */}
         
          <Link to={'/project'}> <a href=""><img className='certiimg' src={proj} alt=""  style={{ "height":"175px","width":"290px","filter": "brightness(0.9)", "padding-right":"20px"}}/></a></Link>
          {/* <div className='cardtext3'><h1>Project</h1></div> */}
          
          <Link to={'/skills'}><a href=""><img className='certiimg'src={skill} alt=""   style={{ "height":"175px","width":"290px","filter": "brightness(0.9)", "padding-right":"20px"}}/></a></Link>
          
          <a href=""><img src={recom} alt=""  style={{ "height":"175px","width":"290px","filter": "brightness(0.9)", "padding-right":"20px"}}/></a>
       
        </div>
    </div>
    

    {/* <div className='headings'><h1 id="home">More for Recuiter</h1></div>
    <div className="box">
      <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t1.PNG?raw=true" alt=""/></a>
      <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t2.PNG?raw=true" alt=""/></a>
      <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t3.PNG?raw=true" alt=""/></a>
      <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t4.PNG?raw=true" alt=""/></a>
      <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t5.PNG?raw=true" alt=""/></a>
      <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/t6.PNG?raw=true" alt=""/></a>                  
    </div> */}
    
    
     
    <div style={{"height":"80px","margin-top":"40px"}}><Links></Links></div>
         <div style={{"height":"80px","margin-top":"400px"}}> <Footers></Footers></div>
                   
    </div>
  )
}

export default Indexcontainer