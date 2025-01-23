import { TypeAnimation } from "react-type-animation"
import { motion } from "motion/react";

const Speech = () => {
    return (
        <motion.div
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className='bubbleContainer'>
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'I specialize in crafting visually stunning,',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'User-friendly, and responsive websites that leave a lasting impression',
                        1000,
                        'I bring ideas to life, delivering custom designs that align with your brand identity and goals.',
                        1000,
                        'My expertise spans from modern minimalist aesthetics to intricate, detail-oriented interfaces',
                        1000
                    ]}
                    wrapper="span"
                    speed={60}
                    deletionSpeed={60}
                    repeat={Infinity}
                />
            </div>
            <img src="/man.png" alt="" />
        </motion.div>
    )
}

export default Speech