import React from 'react'
import Exp from '../../assets/images/recuiter/Experience.png'
import certi from '../../assets/images/recuiter/certificates.png'
import proj from '../../assets/images/recuiter/Project.png'
import skill from '../../assets/images/recuiter/skills1.png'
import educ from '../../assets/images/recuiter/Education.png'
import recom from '../../assets/images/recuiter/recomnd.png'
import { Link } from 'react-router-dom'

function Maincontainer() {
  return (
    <div>

    <div className="location" id="home">
        <div className='headingsl' style={{textAlign: 'left', marginLeft:'30px'}}><h1 id="home">Todays pick for you</h1></div>
        <div className="box">
          <Link to={'/Experience'}><img className='certiimg' src={Exp}alt=""/></Link>
          {/* <div className='cardtext1'><h1>Experience</h1></div> */}
          {/* <a href=""><img src={certi} alt="certificates"  style={{ "height":"175px","width":"270px","filter": "brightness(0.9)"}}/></a> */}
          {/* <div className='cardtext2'><h1>Certificate</h1></div> */}
         
          <Link to={'/project'}> <a href=""><img className='certiimg' src={proj} alt="" style={{"height":"175px","width":"270px","filter": "brightness(0.9)"}}/></a></Link>
          {/* <div className='cardtext3'><h1>Project</h1></div> */}
          
          <Link to={'/skills'}><img className='certiimg'src={skill} alt=""  style={{ "height":"175px","width":"270px","filter": "brightness(0.9)"}}/></Link>

           <Link to={'/skills'}><img className='certiimg'src={educ} alt=""  style={{ "height":"175px","width":"270px","filter": "brightness(0.9)"}}/></Link>
          
          
          {/* <div className='cardtext4'><h1>Skills</h1></div> */}
          {/* <a href=""><img src={recom} alt="" style={{ "height":"175px","width":"270px","filter": "brightness(0.9)"}}/></a> */}
          {/* <div className='cardtext5'><h1>Recomendations</h1></div> */}

          {/* <a href=""><img src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/p6.PNG?raw=true" alt=""/></a> */}
          
                 
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
    
    
     
    

                   
    </div>
    
     
  )
}
export default Maincontainer