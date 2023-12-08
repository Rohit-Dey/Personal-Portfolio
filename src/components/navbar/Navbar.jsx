import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar /> 
            <div className='wrapper'>
                <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}>
                    Rohit Dey
                </motion.span>
                <div className='social'>
                    <a href=''><img src='/instagram.png'></img></a>
                    <a href=''><img src='/linkedin.png'></img></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar