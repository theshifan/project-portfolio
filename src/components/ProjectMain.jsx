import React from 'react'
import Canteen from '../assets/images/project/foodtocken.jpg'
import brest from '../assets/images/project/brestcancer2.jpg'
import food from '../assets/images/project/food.png'
import move from '../assets/images/project/moveit.png'
import Head from './Head'

function ProjectMain() {
  return (
   
    <div>
       <div><Head></Head></div>

       <main  style={{"height":"20px","width":"1030px","margin-top":"100px"}} class="projects-container1">


<div class="project-card1" >
    <img src={Canteen} alt=""style={{"height":"250px","width":"325px"}}/>
  <div style={{"height":"300px","width":"325px"}}><h3>Canteen Tocken</h3>
  <p>This is my personal project where I built a website for collecting tocken from students by online so that cateen staff can collect it and prepare the food accordingly and can manage the food waste.</p>
  <div class="badges1">
    <span>HTML5</span>
    <span>CSS3</span>
    <span>Django</span>
  </div></div>
</div>


<div class="project-card1">
  <img src={brest} alt="" style={{"height":"250px","width":"325px"}}/>
 <div style={{"height":"300px","width":"325px"}}><h3>Breast Cancer Detection using Machine Learning</h3>
  <p>Developed a machine learning model to accurately classify breast tumors as benign or malignant using the Breast Cancer Wisconsin dataset. The project focuses on early detection of breast cancer through data-driven insights, helping reduce diagnostic errors and support medical decision-making.</p>
  <div class="badges1">
    <span>Python</span>
    <span>Django</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>SQLite</span></div> 
  </div>
</div>


<div class="project-card1">
  <img src={food} alt="" style={{"height":"250px","width":"850px"}}/>
  <div style={{"height":"300px","width":"325px"}}> <h3> Restaurant Management System </h3>
  <p>Built a full-stack Restaurant Management System to streamline restaurant operations including menu management, order tracking, and customer authentication. The system allows restaurants to register, manage their offerings, and receive customer orders in real-time, while users can browse menus from multiple restaurants, place orders, and track delivery.</p>
  <div class="badges1">
    <span>Django</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>SQLite</span>
  </div></div>
</div>
<div class="project-card1">
  <img src={move} alt="" style={{"height":"250px","width":"850px"}}/>
  <div style={{"height":"300px","width":"325px"}}> <h3> Bussiness Management System </h3>
  <p>Built a static website Bussiness Management System to streamline Bussiness operations for a coustomer service. where the customer can view wthe serivce of the company and make enquiry with it.</p>
  <div class="badges1">
    <span>Django</span>
    <span>HTML</span>
    <span>CSS</span>
    <span>JavaScript</span>
    <span>SQLite</span>
  </div></div>
</div>
 </main>
    </div>
  )
}

export default ProjectMain