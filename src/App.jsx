
import Home from './components/Home'
import Timeline from './components/Timeline'
import Nav from './components/Nav'
import About from './components/About'
import Projects from './components/Projects'
import PortfolioItem from './components/PortfolioItem'
import Footer from './components/Footer'
import { useRef } from "react";


function App() {

  const resultRef = useRef(null);
  const resultRef1 = useRef(null)
  

  return (
    <div className="App">
      
      <Nav resultRef={resultRef} resultRef1={resultRef1}/>
      <Home/>
      <About/>
      <Timeline ref={resultRef}/>
      <Projects ref={resultRef1}/>
      <Footer/>
      
    </div>
  )
}

export default App
