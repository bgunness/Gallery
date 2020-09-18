// import Gallery from "../pages/gallery"
import Link from 'next/link'
import { render } from 'react-dom'
import imageLoader from './images'

class GalleryBody extends React.Component {
    constructor() {
        super()
        this.state = {
            defaultSrc: '/img_5192.jpg',
            images:[]
        }
    }

    componentDidMount() {
        const images =  imageLoader()
        this.setState({images})
    }

    render() {
        const src = this.state.images.length > 0 ? this.state.images[0].src : this.state.defaultSrc
        return(
            <div>
                <img src={src} />
                <h3>running</h3>
            </div>
        )
    }
}

export default GalleryBody