import React from 'react';
import classes from "../Navbar/Navbar.module.css";
import {NavLink} from "react-router-dom";
import './HeaderList.css'

const HeaderList = () => {

    return (
        <ul className='header-list'>

            <li className="">
                <NavLink to="/profile" activeClassName="">
                    Profile
                </NavLink>
            </li>
            <li className="">
                <NavLink to="/dialogs" activeClassName="">
                    Messages
                </NavLink>
            </li>
            <li className="">
                <a>
                    News
                </a>
            </li>
            <li className="">
                <a>
                    Music
                </a>
            </li>
            <li className="">
                <a>
                    Settings
                </a>
            </li>
            <li className="">
                <NavLink to="/users" activeClassName={classes.active}>
                    Users
                </NavLink>
            </li>
            <div>
            </div>
        </ul>
    );
};

export default HeaderList;