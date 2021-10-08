import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from './DialogsItems';
import {Messages} from './Messages';
import {addMessageAC, sendMessageAC} from '../../../redux/messageReduser';
import {ActionType} from '../../../redux/state';
import {MessagesType} from '../../../App';

type PropsType = {
    addMessage:()=>void
    messgeChange:(newText:string)=>void
    messageData: MessagesType

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

    let dialogElements = props.messageData.dialogsData.map(d => <DialogsItems id={d.id} name={d.name}/>)
    let messageElement = props.messageData.messageData.map(m => <Messages message={m.message}/>)
    let newText=props.messageData.newMessage;

    let addMessage = () => {
        props.addMessage();
    }
   let messgeChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newText=e.currentTarget.value;
       props.messgeChange(newText);

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