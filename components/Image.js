function Image(props) {
    return (
            <div>
                <img className='image' src={props.image.src} alt={props.image.description} />
            </div>

        // props.images.map(image => {
        //     return(
        //         <div>
        //             <img className='image' src={image.src} alt={image.description} />
        //         </div>
        //     )
        // })
    )
}

export default Image