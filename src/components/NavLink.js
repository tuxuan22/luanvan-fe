import React from 'react'
import { Nav } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'


const NavLink = ({ href, children, activePath }) => {
    const location = useLocation()

    return (
        <Nav.Link
            className={`nav-link ${location.pathname === activePath ? 'active' : ''}`}
            href={href}
            style={{
                fontWeight: location.pathname === activePath ? '500' : 'normal',
                backgroundColor: location.pathname === activePath ? '#transparent' : 'transparent',
                color: location.pathname === activePath ? '#38b6ff' : '#000',
            }}
        >
            {children}
        </Nav.Link>
    )
}

export default NavLink