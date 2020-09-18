import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

const barIcon = <FontAwesomeIcon icon = {faBars} />

    return(
        <div className='header'>
            <div className='brand'>
                <h2 className='main'>ZED</h2>
                <h3 className='sub'>Art</h3>
            </div>
            <div className='dropdown'>
                <span>{barIcon}</span>
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