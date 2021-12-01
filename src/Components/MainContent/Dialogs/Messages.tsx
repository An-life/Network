import React from 'react';
import s from './Dialogs.module.css'

type PropsType = {
    message: string
}

export const Messages = (props: PropsType) => {
    return (<div className={s.messages}>{props.message}</div>)
}
