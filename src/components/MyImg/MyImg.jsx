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
                    <motion.h1 variants={textVariants}>Upcoming <span>S W E</span> Intern @</motion.h1>
                    <motion.img className='google' src='/google.png'></motion.img>
                    <motion.div variants={textVariants} className="buttons">
                        <motion.button>See Latest Work</motion.button>
                        <motion.button>Contact Me</motion.button>
                        <a href='https://drive.google.com/file/d/12T_rN4umuUnPk1DRqPR0iekowzob3a63/view?usp=sharing'><motion.button className='resume'>Checkout Resume</motion.button></a>
                    </motion.div>
                    <motion.img variants={textVariants} src='/scroll.png' animate='scrollButton'></motion.img>
                </motion.div>
            </div>
            <motion.div className="sliding-text-container" variants={sliderVariants} initial='initial' animate='animate'>
                MERN Developer Machine Learning Enthusiast
            </motion.div>
            <div className='image-container'>
                <img src='/rohit.png'></img>
            </div>
        </div>
    )
}

export default MyImg