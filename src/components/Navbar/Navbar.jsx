import React from 'react';
import {NavLink} from 'react-router-dom';
import Friends from '../Friends/Friends';
import classes from './Navbar.module.css';
import Accordeon from "../Accordeon/Accordeon";


const Navbar = (props) => {
    let state = props.store.getState().sidebar;
    return (
        <>
            <nav className={classes.nav} >

                <div >
                    {/*<Friends friend={state.sidebarData} />*/}
                    <Accordeon friends={<Friends friend={state.sidebarData} />} />
                </div >
            </nav >
        </>
    );
};

export default Navbar;
