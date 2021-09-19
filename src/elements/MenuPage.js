import React from 'react'
import { useLocation, Link } from 'react-router-dom'



function MenuPage() {



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
        <div>
            <ul className="ulMenu">
                {" "}
                <li className="liMenu"  >
                    <a className="aMenu" href="/" data-text="Home">
                        Home
                    </a>
                </li>
                <li className="liMenu" >
                    <a className="aMenu" href="/Portfolio" data-text="Portfolio">
                        Portfolio
                    </a>
                </li>
                <li className="liMenu" >
                    <a className="aMenu" href="/about" data-text="about">
                        About Us
                    </a>
                </li>
                <li className="liMenu" >
                    <a href="/news" data-text="news">
                        News
                    </a>
                </li>
                <li className="liMenu" >
                    <a className="aMenu" href="/contact" data-text="contact">
                        Join Us
                    </a>
                </li>
            </ul>
        </div>
    );
}



export default MenuPage