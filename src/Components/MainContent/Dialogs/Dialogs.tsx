import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from './DialogsItems';
import {Messages} from './Messages';
import {ActionType} from '../../../redux/state';

type PropsType = {
    dialogsData: Array<DialogsType>,
    messageData: Array<MessageType>
    dispatch:(actoin:ActionType)=>void
}
type DialogsType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    message: string
}

export const Dialogs = (props: PropsType) => {

    let dialogElements = props.dialogsData.map(d => <DialogsItems id={d.id} name={d.name}/>)
    let messageElement = props.messageData.map(m => <Messages message={m.message}/>)

    let addMessage = () => {

    }


    return (<div className={s.containerDialogs}>
            <div>
                {dialogElements}

            </div>
            <div>
                {messageElement}
                <textarea ></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}