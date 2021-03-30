import React, { useState } from 'react';
import Meta from './Meta'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Footer from './Footer'

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    };

    return (
        <>
            <Meta />
            {
                isOpen ? <Nav toggle={toggle}/> : <Sidebar toggle={toggle} />
            }
            <div>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout
