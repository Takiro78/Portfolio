import { motion  } from "framer-motion";
import {Routes, Route} from "react-router-dom";


import './style/App.css'

import Home from "./pages/home/Home.jsx";
import Projects from "./pages/projects/Projects.jsx";
import Nav from "./Components/nav/Nav";
import NotFound from "./pages/notfound/NotFound.jsx"





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