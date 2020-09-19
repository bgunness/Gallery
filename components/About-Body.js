import Image from './Image'

class About extends React.Component {
    constructor() {
        super()
        this.state = {
            about: true,
            image: {
                src: 'https://picsum.photos/id/27/1920/1080'
            }
        }
    }
    render() {
        return(
            <div>
                {/* Image */}
                <div className='about-image'>
                    <Image image={this.state.image} />
                </div>
                {/* Quote */}
                {/* Description */}
            </div>
        )
    }
}

export default About