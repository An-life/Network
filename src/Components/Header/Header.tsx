import React from 'react';
import s from './Header.module.css'


export const Header=()=>{
    return(
        <div className={s.header}>
            <img src={'https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt='logo'/>
        </div>
    )
}