import React from 'react';
import '../../styles/header.scss'
import { Nav, NavItem, NavLink } from 'reactstrap';


const Header = () => {
    return (
        <div className="header">
             <div className="header_logo">
                React Live Search
            </div>
            <Nav className="header_nav">
                <NavItem className="header_nav_item">
                    <NavLink href="wikiApi" >Wiki API</NavLink>
                </NavItem>
                <NavItem className="header_nav_item">
                    <NavLink href="myApi" >MyApi API</NavLink>
                </NavItem>
                <NavItem className="header_nav_item">
                    <NavLink href="add" >Add</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
}

export default Header;
