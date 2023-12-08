import { useRef } from 'react'
import './parallax.scss'
import {motion, useScroll, useTransform} from 'framer-motion'
 

const Parallax = ({type}) => { 
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        //animation starts when top of target element reaches top of viewport
        //ends when top of target reaches end of viewport
        offset: ["start start", "end start"],
    })

    const yBg = useTransform(scrollYProgress, [0,1], ['0%','70%'])
    const yText = useTransform(scrollYProgress, [0,1], ['0%','500%'])

    return (
        <div ref={ref} className="parallax" style={{background:type==="Skills" ? "linear-gradient(#111132, #0c0c1d)" : 'linear-gradient(#111132, #505064)',}}>
            <motion.h1 style={{y:yText}}>{type==="Skills" ? "What I Know?" : "What I Did?"}</motion.h1>
            <motion.div style={{y:yBg}} className="mountains"></motion.div>
            <motion.div className="planets" style={{y:yBg, backgroundImage: `url(${type==='Skills' ? '/planets.png' : '/sun.png'})`}}></motion.div>
            <motion.div style={{x:yBg}} className="stars"></motion.div>
        </div> 
    )
}

export default Parallax