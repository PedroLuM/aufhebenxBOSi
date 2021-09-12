import React from 'react'
import { useLocation, Link } from 'react-router-dom'

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
        <ul className="main-menu">
            {displayLinks}
        </ul>
    )

}

export default Menu