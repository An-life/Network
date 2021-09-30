import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
type PropsType={
    id:number
    name:string
}

export const DialogsItems = (props:PropsType) => {
    return (<div className={s.dialog}>
        <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
    </div>)
}
