function Image(props) {
    return (
        <div>
            <img className='image' src={props.image.src} alt={props.image.description} />
        </div>
    )
}

export default Image