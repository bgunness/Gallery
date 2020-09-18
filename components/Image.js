function Image(props) {
    console.log(props.images)
    
// Define function here that iterates props.images, and creates a div like below to print each image on each iteration
    return (
        props.images.map(image => {
            return(
                <div>
                    <img className='image' src={image.src} alt={image.description} key={image.id}/>
                </div>
            )
        })
    )
}

export default Image