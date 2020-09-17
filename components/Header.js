function Header() {
    return(
        <div className='header'>
            <div className='brand'>
                <h2 className='main'>ZED</h2>
                <h3 className='sub'>Art</h3>
            </div>
            <div className='dropdown test'>
                <span>Burger</span>
                    <div>
                        <ul className='dropdown-content'>
                            <li>Gallery</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default Header