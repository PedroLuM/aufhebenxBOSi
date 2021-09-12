import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Menu() {



    const location = useLocation();
    const menuLinks = [
        {
            name: 'Home',
            url: '/',
            active: false
        },
        {
            name: 'Portfolio',
            url: '/Portfolio',
            active: false
        },
        {
            name: 'About Us',
            url: '/about',
            active: false
        },
        {
            name: 'News',
            url: '/news',
            active: false
        },
        {
            name: 'Join Us',
            url: '/contact',
            active: false
        }
    ]
    const displayLinks = menuLinks.map((link, i) => <li key={i}><Link to={link.url} className={location.pathname === link.url ? 'active' : null}>{link.name}</Link></li>)

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <ul className="main-menu">
                        {displayLinks}
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Menu