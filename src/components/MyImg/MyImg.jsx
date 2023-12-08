import './myimg.scss'
import { motion } from 'framer-motion'

const textVariants = {
    initial: {
        x: -500,
        opacity:0,
    },
    animate: {
        x:0,
        opacity:1,
        transition: {
            duration:1,
            staggerChildren :0.1,
        },
    }, 

    scrollButton:{
        opacity:0,
        y:10,
        transition:{
          duration:1.6,
          repeat: Infinity
        }
    }
};

const sliderVariants = {
    initial: {
        x: 0,
    },
    animate: {
        x:"-980%",
        opacity:1,
        transition: {
            repeat:Infinity,
            repeatType:'mirror',
            duration:20
        },
    }, 
};

const MyImg = () => {
    return (
        <div className='my-img'>
            <div className='wrapper'>
                <motion.div className="text-container" variants={textVariants} initial="initial" animate='animate'>
                    <motion.h2 variants={textVariants}>ROHIT DEY</motion.h2>
                    <motion.h1 variants={textVariants}>Upcoming SWE Intern @ GOOGLE</motion.h1>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button>See Latest Work</motion.button>
                        <motion.button>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} src='/scroll.png' animate='scrollButton'></motion.img>
                </motion.div>
            </div>
            <motion.div className="sliding-text-container" variants={sliderVariants} initial='initial' animate='animate'>
                MERN Developer Machine Learning Enthusiast
            </motion.div>
            <div className='image-container'>
                <img src='/hero.png'></img>
            </div>
        </div>
    )
}

export default MyImg