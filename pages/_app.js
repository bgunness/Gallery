import '../styles.css'
import { motion } from 'framer-motion'

function GalleryApp({ Component, pageProps, router }) {
    return (
        <motion.div key={router.route} initial='pageInitial' animate='pageAnimate' transition={{duration: 0.3}} variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1
            },
        }}>
            <Component {...pageProps} />
        </motion.div>
    )
}
  
export default GalleryApp;