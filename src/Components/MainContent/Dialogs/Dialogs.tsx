import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from './DialogsItems';
import {Messages} from './Messages';
import {ActionType, addMessageAC, sendMessageAC} from '../../../redux/state';

type PropsType = {
    dialogsData: Array<DialogsType>,
    messageData: Array<MessageType>
    newMessage:string
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
    let newText=props.newMessage;

    let addMessage = () => {
        props.dispatch(sendMessageAC(newText));
    }
   let messgeChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newText=e.currentTarget.value;
       props.dispatch(addMessageAC(newText));


   }

    return (<div className={s.containerDialogs}>
            <div>
                {dialogElements}

            </div>
            <div>
                {messageElement}
                <textarea value={newText} onChange={messgeChange} placeholder={'Enter yout message...'}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}