import { motion } from 'framer-motion'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerChildren: -1,
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0
    }
}

const Links = () => {

    const items = ["Homepage", "Skills", 'Portfolio', "Contact", "About"]
    return (
        <motion.div className="links" variants={variants}>
            {
                items.map((item) => (
                    <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{ scale: 1.1 }} wh ileTap={{ scale: 0.9 }}>
                        {item}
                    </motion.a>
                ))
            }
        </motion.div>
    )
}

export default Links