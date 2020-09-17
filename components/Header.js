function Header() {
    return(
        <div className='header'>
            <h2 className='brand'>brand</h2>
            <ul className='dropdown test'>
                <div className='dropdown-content'>
                    <li>Gallery</li>
                    <li>About</li>
                    <li>Contact</li>
                </div>
            </ul>
        </div>
    )
}

export default Header