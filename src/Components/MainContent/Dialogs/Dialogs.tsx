import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from './DialogsItems';
import {Messages} from './Messages';
import {MessagesType} from '../../../App';

type PropsType = {
    addMessage:()=>void
    messageChange:(newText:string)=>void
    messageData: MessagesType
}

export const Dialogs = (props: PropsType) => {

    let dialogElements = props.messageData.dialogsData.map(d => <DialogsItems id={d.id} name={d.name}/>)
    let messageElement = props.messageData.messageData.map(m => <Messages message={m.message}/>)
    let newText=props.messageData.newMessage;

    let addMessage = () => {
        props.addMessage();
    }
   let messageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newText=e.currentTarget.value;
       props.messageChange(newText);
   }

    return (<div className={s.containerDialogs}>
            <div>
                {dialogElements}

            </div>
            <div>
                {messageElement}
                <textarea value={newText} onChange={messageChange} placeholder={'Enter yout message...'}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}