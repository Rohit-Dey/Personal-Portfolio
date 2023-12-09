import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
const items = [
    {
        id: 1,
        title: "DoctorWise Website",
        img: '/doctor.png',
        link: 'https://doctorwise-2z8v.onrender.com/',
        desc: 'Developed a MERN website to facilitate patients in choosing doctors from 20+ specialties, ordered by rating. Solved the issue of users having to navigate through 500+ hospital websites across India.'
    },
    {
        id: 2,
        title: "YelpCamp Website",
        img: '/yelp.png',
        link: 'https://yelp-camp-8ixk.onrender.com/',
        desc: 'A user interactive website that provides comprehensive information of 50+ campgrounds across 10+ locations. Authorized users can add, edit, delete and review campgrounds. Implemented the Mapbox API v2 to integrate a map displaying campground locations using markers.'
    },

    {
        id: 3,
        title: "Drone GUI",
        img: '/drone.pbm',
        link:'',
        desc: 'Created a GUI built using React for AUVSI SUAS 2022 Competition held in June 2022 in Maryland, USA. Designed the sidebar to display 15+ real-time telemetry data of drones during flights. Created a Persistent Timer component that avoids timer reset on accidental page reloads.'
    },
]

const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
    })

    const y = useTransform(scrollYProgress, [0, 1], [-500, 500])
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="image-container" ref={ref}> 
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="text-container" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        {item.link.length ? <a href={item.link}><button>Visit</button></a> : ''}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 200,
        damping: 100
    })
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio 