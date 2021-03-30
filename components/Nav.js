import navStyle from '../styles/Nav.module.css'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'

const Nav = ({toggle}) => {
    return (
        <nav className={navStyle.container}>
            <div className={navStyle.navBody}>
                <Link href='/'>
                    <h4 className={navStyle.title}>Barbero</h4>
                </Link>
                
                
                <div className={navStyle.iconContainer} onClick={toggle}>
                    <FaBars />
                </div>

                <ul className={navStyle.menu}>
                    <li className={navStyle.navItem}>
                        <Link href='/'>
                            <a className={navStyle.navLinks}>Home</a>
                        </Link>
                    </li>
                    <li className={navStyle.navItem}>
                        <Link href='/shop'>
                            <a className={navStyle.navLinks}>Shop</a>
                        </Link>
                    </li>
                    <li className={navStyle.navItem}>
                        <Link href='/services'>
                            <a className={navStyle.navLinks}>Services</a>
                        </Link>
                    </li>
                    <li className={navStyle.navItem}>
                        <Link href='/contact'>
                            <a className={navStyle.navLinks}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
