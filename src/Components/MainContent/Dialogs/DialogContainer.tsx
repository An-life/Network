import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from './DialogsItems';
import {Messages} from './Messages';
import {addMessageAC, sendMessageAC} from '../../../redux/messageReduser';
import {ActionType} from '../../../redux/state';
import {MessagesType} from '../../../App';
import {store, StoreType} from '../../../redux/StoreRedux';
import {Dialogs} from './Dialogs';

type PropsType = {
    store:StoreType
}


export const DialogContainer = (props: PropsType) => {

   let state=store.getState();
    let newText=state.messageData.newMessage

    let addMessage = () => {
        props.store.dispatch(sendMessageAC(newText));
    }
    let messgeChange=(newText:string)=>{

        props.store.dispatch(addMessageAC(newText));

    }

    return (<div >
           <Dialogs  addMessage={addMessage} messgeChange={messgeChange} messageData={state.messageData}/>

        </div>
    )
}