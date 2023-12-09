import { useRef } from 'react'
import './skills.scss'
import { motion, useInView } from 'framer-motion'

const variants  = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity:1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren:0.4,
        }
    }
}

const Skills = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})
    return (
        <motion.div className="skills" variants={variants} ref={ref} initial='initial' animate={isInView && 'animate'}>
            <motion.div className="text-container" variants={variants}>
                <h1><span>S</span><motion.span whileHover={{color: '#45FFCA'}}>KILLS</motion.span></h1>
                <h2>Experienced In :</h2>
            </motion.div>
            <motion.div variants={variants} className="image-container">
                <img src="/react.png" alt="" />
                <img src="/node.png" alt="" />
                <img src="/html.png" alt="" />
                <img src="/css.png" alt="" />
                <img src="/js.png" alt="" />
                <img src="/sass.png" alt="" />
                <img src="/cpp.png" alt="" />
                <img src="/python.png" alt="" />
            </motion.div>
            <motion.div variants={variants} className="text-container">
                <h2>Currently Learning :</h2>
            </motion.div>
            <motion.div className="image-container">
                <img src="/tf.png" alt="" />
                <img src="/scikit.png" alt="" />
                <img src="/ml.png" alt="" />
            </motion.div>
        </motion.div>
    )
}

export default Skills