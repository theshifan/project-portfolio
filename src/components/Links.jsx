import React from 'react'
import { Link } from 'react-router-dom'

function Links() {
  return (
    <section class="link">
      <div class="logos" style={{marginBottom:'30px'}}>
        <a href="https://www.instagram.com/theshifancooks/"><i class="fab fa-instagram fa-2x logo"></i></a>
        <a href="https://github.com/theshifan"><i class="fab fa-github fa-2x logo" ></i></a>
        <a href="https://youtube.com/@theshifancooks?si=SlZsTcuw-jBzig3D"><i class="fab fa-youtube fa-2x logo"></i></a>
        <a href="https://www.linkedin.com/in/shifan-abdulla-/"><i class="fab fa-linkedin fa-2x logo" ></i></a>
      </div>
      <div class="sub-links">
        <ul>
          <li><Link to={'/contactme'}>Contact me</Link></li>
          <li><a href="#">Help Center</a></li>
          <li><Link to={'/about'}>About</Link>  </li>
          
        </ul>
      </div>
    </section>
  )
}

export default Links