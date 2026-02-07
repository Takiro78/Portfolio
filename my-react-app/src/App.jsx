import {motion} from "framer-motion";


import './App.css'
import Wave from "./Wave";




export default function App() {
  return (
    <div
      style ={{
        fontFamily: "sans-serif",
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto"
      }}>
        <Wave />

        {/* header*/}
        <motion.h1
          initial = {{opacity: 0, y: -20}}
          animate ={{ opacity: 1, y: 0}}
          transition = {{duration: 0.6}}
          style = {{ textAlign: "center", marginBottom: "40px"}}
          >
            My Portfolio
          </motion.h1>

          {/* hero section */}

          <motion.div 
            initial={{opacity: 0, y:30}}
            animate = {{opacity:1, y:0}}
            transition={{duration: 0.8}}
            style = {{
              background: "#db8181",
              padding: "40px",
              borderRadius: "12px",
              textAlign: "center",
              marginBottom: "40px"
            }}
            >

            <h2>Hello</h2>
            <p>world!</p>

            <motion.button
              whileHover={ {scale: 1.1}}
              whileTap={{scale: 0.95}}
              style={{
                marginTop: "20px",
                padding: "12px 24px",
                fontSize: "24px",
                border: "none",
                background: "#007bff",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              contact me
            </motion.button>

            </motion.div>

            {/** scroll reveal section */}

            <motion.div
              initial ={{opacity: 0, y:50}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:1}}
              style={{
                background: "#5c5cc5"
                ,padding: "30px",
                borderRadius: "15px"
              }}
            >
              <h3>about me</h3>
              <p>blah blah blah</p>
            </motion.div>

      </div>
  )
}