import {motion} from "framer-motion";


import './App.css'
import Wave from "./Wave";
import Nav from "./Nav";




export default function App() {
  return (
    <div className="container">
      <Nav />
      <Wave />
      <div className="hero section">

          <h1>Welcom To Gabriel's Fabulous Portfolio</h1>
          <div className="banner" >
            <img className = "banner-img" src="Cayman.png" style={{ width: "100%", height: "auto" }} />
          </div>
      </div>
      
      <div className="spacer"></div>


      <div
        className="about-me section">
          <h1>About Me</h1>

       </div>


        


    </div>

  )
}