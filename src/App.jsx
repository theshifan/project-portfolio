
import Signin from './components/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { PureComponent } from 'react'
import HomePage from './components/recuiter/HomePage'
import ProjectMain from './components/recuiter/ProjectMain'
// import DevepHero from './components/DevepHeros.JSX'
import DevopHeros from './components/recuiter/DevopHeros'
import Skillsset from './components/recuiter/Skillsset'
import Indexcontainer from './components/recuiter/Indexcontainer'
import About from './components/recuiter/About'
import Test from './components/Test'
import Contact from './components/Contact'
import Experience from './components/recuiter/Experience'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/index' element={<Indexcontainer></Indexcontainer>}></Route>
        <Route path='' element={<Signin></Signin>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>  
        <Route path='/project' element={<ProjectMain></ProjectMain>}></Route> 
        <Route path='/DevepHero' element={<DevopHeros></DevopHeros>}></Route>
        <Route path='/skills' element={<Skillsset></Skillsset>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contactme' element={<Contact></Contact>}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
        <Route path='/Experience' element={<Experience></Experience>}></Route>
      </Routes>
    </BrowserRouter>  
  );
}
export default App