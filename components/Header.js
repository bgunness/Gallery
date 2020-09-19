import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function Header() {

const barIcon = <FontAwesomeIcon className='burger' icon={faBars} />

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
                        <Link href='/'><a><li>Home</li></a></Link>
                        <Link href='gallery'><a><li>Gallery</li></a></Link>
                        <Link href='about'><a><li>About</li></a></Link>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header