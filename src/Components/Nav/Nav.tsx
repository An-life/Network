import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'


export const Nav=()=>{
    return(
        <div className={s.Nav}>
            <div><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
            <div><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
            <div><NavLink to='/users' activeClassName={s.activeLink}>Users</NavLink></div>
            <div><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
            <div><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
            <div><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
        </div>
    )
}