import {motion} from "framer-motion";
import {Routes, Route} from "react-router-dom";


import './style/App.css'
import Wave from "./Components/wave/Wave";
import Nav from "./Components/nav/Nav";

function Home() {
  return <h1>Home</h1>;
}

function Projects() {
  return <h1>Projects</h1>;
}


export default function App() {
  return (
    <div className="container">
      <Nav />
      <Wave />

      <div
      className="page-contents">
        
        <div className="hero section">

            <h1>Welcom To Gabriel's Fabulous Portfolio</h1>
            <div className="banner" >
              <img className = "banner-img" src="Cayman4.png" style={{ width: "100%", height: "auto" }} />
            </div>
        </div>
        
        {/* <div className="spacer"></div> */}


       

       </div>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
        


    </div>

  )
}