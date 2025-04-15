import React from 'react'
import Head from './components/Head'
import Maincontianer from './components/Maincontainer'
import Links from './components/Links'
import Footer from './components/Footers'
import Signin from './components/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero'
import ProjectMain from './components/ProjectMain'
// import DevepHero from './components/DevepHeros.JSX'
import DevopHeros from './components/DevopHeros'

function HomePage(){
  return(
    <div>
      <Head></Head>
      <Hero></Hero>
      <Maincontianer></Maincontianer>
      <Links></Links>
      <Footer></Footer>
    </div>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/index' element={<Signin></Signin>}></Route>
        <Route path='/home' element={<HomePage />}></Route>  
        <Route path='/project' element={<ProjectMain></ProjectMain>}></Route> 
        <Route path='/DevepHero' element={<DevopHeros></DevopHeros>}></Route>
      </Routes>
    </BrowserRouter>  
  );
}
export default App