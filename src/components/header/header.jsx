import React from 'react';
import '../../styles/header.scss'
import { Nav, NavItem,  NavLink } from 'reactstrap';


const Header = () => {
    return (
        <div className="header">
             <div className="header_logo">
                React Live Search
            </div>
            <Nav tabs>
                <NavItem>
                    <NavLink href="\" active>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="myApi">MyApi API</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Header;
