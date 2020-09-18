// import Gallery from "../pages/gallery"
import Link from 'next/link'
import { render } from 'react-dom'
import imageLoader from './images-array'
import Image from './Image'

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
        // const src = this.state.images.length > 0 ? this.state.images[0].src : this.state.defaultSrc
        return(
            <div className='gallery-image'>
                {this.state.images.length > 0 ? <Image images={this.state.images}/> : <img className='image' src={this.state.defaultSrc} />}
            </div>
        )
    }
}

export default GalleryBody