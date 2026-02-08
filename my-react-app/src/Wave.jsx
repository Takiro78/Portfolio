import {easeInOut, easeOut, motion} from "framer-motion";

import "./wave.css"
export default function Wave() {
    return(
       
        <div className="wave-wrapper">
            
            {/**BACK WAVE vertical movement */}
            <motion.div
                className="wave-container"
                initial = {{y:-150}}
                animate = {{y:600}}
                transition={{ duration:5, ease:easeInOut}}
            >

                {/* *horizontal movement */}
                <motion.div 
                    className = "wave-back"
                    animate = {{x: ["0%", "-100%"]}}
                    transition={{duration: 10 , ease: "linear",repeat:Infinity}}

                >
                    <svg className="wave-svg" viewBox="0 0 2400 150" preserveAspectRatio="none">
                    <path
                        d="M0 80 C 100 40, 200 120, 300 80 C 400 40, 500 120, 600 80 C 700 40, 800 120, 900 80 C 1000 40, 1100 120, 1200 80 L 1200 150 L 0 150 Z"
                        fill="#4fc3f7"
                    />
                    
                    {/* second identical wave shifted right */}
                    <path
                        d="M0 80 C 100 40, 200 120, 300 80 C 400 40, 500 120, 600 80 C 700 40, 800 120, 900 80 C 1000 40, 1100 120, 1200 80 L 1200 150 L 0 150 Z"
                        fill="#4fc3f7"
                        transform="translate(1200, 0)"
                    />
                    </svg>
                </motion.div>
            </motion.div>



                {/**middle WAVE vertical movement */}
            <motion.div
                className="wave-container"
                initial = {{y:-150}}
                animate = {{y:630}}
                transition={{ duration:5, ease:easeInOut}}
            >

                {/* *horizontal movement */}
                <motion.div 
                    className = "wave-mid"
                    animate = {{x: ["-100%", "00%"]}}
                    transition={{duration: 10 , ease: "linear",repeat:Infinity}}

                >
                    <svg className="wave-svg" viewBox="0 0 2400 150" preserveAspectRatio="none">
                    <path
                        d="M0 80 C 100 40, 200 120, 300 80 C 400 40, 500 120, 600 80 C 700 40, 800 120, 900 80 C 1000 40, 1100 120, 1200 80 L 1200 150 L 0 150 Z"
                        fill="#2e7bce"
                    />
                    
                    {/* second identical wave shifted right */}
                    <path
                        d="M0 80 C 100 40, 200 120, 300 80 C 400 40, 500 120, 600 80 C 700 40, 800 120, 900 80 C 1000 40, 1100 120, 1200 80 L 1200 150 L 0 150 Z"
                        fill="#2e7bce"
                        transform="translate(1200, 0)"
                    />
                    </svg>
                </motion.div>
            </motion.div>



                {/**BACK WAVE vertical movement */}
            <motion.div
                className="wave-container"
                initial = {{y:-150}}
                animate = {{y:660}}
                transition={{ duration:5, ease:easeInOut}}
            >

                {/* *horizontal movement */}
                <motion.div 
                    className = "wave-front"
                    animate = {{x: ["0%", "-100%"]}}
                    transition={{duration: 18 , ease: "linear",repeat:Infinity}}

                >
                    <svg className="wave-svg" viewBox="0 0 2400 150" preserveAspectRatio="none">
                    <path
                        d="M0 80 C 100 40, 200 120, 300 80 C 400 40, 500 120, 600 80 C 700 40, 800 120, 900 80 C 1000 40, 1100 120, 1200 80 L 1200 150 L 0 150 Z"
                        fill="#0848b7"

                    />
                    
                    {/* second identical wave shifted right */}
                    <path
                        d="M0 80 C 100 40, 200 120, 300 80 C 400 40, 500 120, 600 80 C 700 40, 800 120, 900 80 C 1000 40, 1100 120, 1200 80 L 1200 150 L 0 150 Z"
                        fill="#0848b7"
                        transform="translate(1200, 0)"
                    />
                    </svg>
                </motion.div>

                

    


            </motion.div>

            <motion.div
                    className="wave-bg"
                    initial={{y:0}}
                    animate={{y:800}}
                    transition={{duration:5, ease: easeInOut}}
                    fill="#4fc3f7"
                >

                </motion.div>

        </div>
    )    
}