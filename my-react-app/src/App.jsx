import {motion} from "framer-motion";
import {Routes, Route} from "react-router-dom";


import './style/App.css'

import Home from "./pages/home/Home.jsx";
import Wave from "./Components/wave/Wave";
import Nav from "./Components/nav/Nav";
import NotFound from "./pages/notfound/NotFound.jsx"


function Projects() {
  return <h1>Projects</h1>;
}


export default function App() {
  return (
    <div className="container">
      <Nav />
      



      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />}  />
      </Routes>
        


    </div>

  )
}