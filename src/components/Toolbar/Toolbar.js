import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from  '../SideDrawer/DrawerToggleButton';




const toolbar  = props => (

    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle_button">
                <DrawerToggleButton  click = {props.drawerToggleClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href ="/" > BACK TO THE FUTURE </a> </div>
            <div className="spacer" />
            <div className="toolbar_navigation_items">
                <ul>
                    <li><a href="/">LOGIN</a></li>
                    <li><a href="/">SIGN UP</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
