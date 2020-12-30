import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';
import HeaderList from "../HeaderList/HeaderList";


const Header = (props) => {
    return (
        <header className={classes.header} >
            <img className="header-logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
                 alt='my-header-logo' />
            <HeaderList />
            <div className={classes.loginBlock} >
                <NavLink to='/login' >
                    LogIn
                </NavLink >
            </div >
        </header >
    );
};

export default Header;
