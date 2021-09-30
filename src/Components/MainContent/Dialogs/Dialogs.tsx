import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from './DialogsItems';
import {Messages} from './Messages';

type PropsType = {
    dialogsData: Array<DialogsType>,
    messageData: Array<MessageType>
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
    let newMessage = React.createRef<HTMLTextAreaElement>();
    let addMessage = () => {
        let textMessage = newMessage.current?.value;
        alert(textMessage)
    }


    return (<div className={s.containerDialogs}>
            <div>
                {dialogElements}

            </div>
            <div>
                {messageElement}
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>

        </div>
    )
}