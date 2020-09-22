// import { motion } from 'framer-motion'

function Image(props) {
    return (
        <div>
            <img className='image' src={props.image.src} alt={props.image.description} />
        </div>
    )
}


// function Image(props) {
//     return (
//         <motion.div animate={{
//             scale: [1, 0.75, 0.60, 0.75, 1],
//             rotate: [0, 0, 360, 0, 0]
//             }} transition={{duration: 3}}>
//             <img className='image' src={props.image.src} alt={props.image.description} />
//         </motion.div>
//     )
// }

export default Image