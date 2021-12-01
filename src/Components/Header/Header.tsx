import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

type PropsType = {
    isAuth: boolean
    login: string | null
    logout:()=>void
}

export const Header = (props: PropsType) => {
    return (
        <div className={s.header}>
            <img
                src={'https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                alt="logo"/>
            <div className={s.login}>
                {props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}>Log out</button></div> :
                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </div>
    )
}