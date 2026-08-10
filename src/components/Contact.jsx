import React from 'react'
import Head from './Head'
import Footer from './Footers'
const Contact = () => {
  return (
       <section className="link">
        <Head />        <h1 style={{ marginTop: '60px',textAlign: 'left',width: '100%',margin: '0 auto', fontSize:'70px'}}>Contact Me</h1>

      <div className="logos"  style={{
        marginTop: '110px',
        fontSize: '80px',
        display: 'flex',
        justifyContent: 'center',
        gap: '50px'
    }}>

        <a href="https://www.instagram.com/theshifancooks/"><i class="fab fa-instagram fa-2x logo"></i></a>
        <a href="https://github.com/theshifan"><i class="fab fa-github fa-2x logo" ></i></a>
        <a href="mailto:shifan9914@gmail.com"><i className="fas fa-envelope fa-2x logo"></i></a>
        <a href="https://www.linkedin.com/in/shifan-abdulla-/"><i class="fab fa-linkedin fa-2x logo" ></i></a>
      </div>
      <Footer></Footer>
    </section>
  )
}

export default Contact