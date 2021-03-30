import sideStyle from '../styles/Sidebar.module.css'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'

const Sidebar = ({toggle}) => {
    return (
        <div className={sideStyle.container}>
            <div className={sideStyle.closeIconCon} onClick={toggle}>
                <IoMdClose className={sideStyle.closeIcon} />
            </div>

            <div className={sideStyle.wrapper}>
                <Link href='/'>
                    <div className={sideStyle.item}>
                        <a onClick={toggle} className={sideStyle.link}>Home</a>
                    </div>
                </Link>
                <Link href='/shop'>
                    <div className={sideStyle.item}>
                        <a onClick={toggle} className={sideStyle.link}>Shop</a>
                    </div>
                </Link>
                <Link href='/service'>
                    <div className={sideStyle.item}>
                        <a onClick={toggle} className={sideStyle.link}>Service</a>
                    </div>
                </Link>
                <Link href='/contact'>
                    <div className={sideStyle.item}>
                        <a onClick={toggle} className={sideStyle.link}>Contact</a>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
