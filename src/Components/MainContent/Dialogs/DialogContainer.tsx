import React, {ChangeEvent, ChangeEventHandler} from 'react';
import {addMessageAC, sendMessageAC} from '../../../redux/messageReduser';
import {Dialogs} from './Dialogs';
import StoreContext from '../../../StoreContext';


export const DialogContainer = () => {
    return (<div>
            <StoreContext.Consumer>
                {
                (store)=>{
                    let state= store.getState();
                    let newText=state.messageData.newMessage
                    let addMessage = () => {
                        store.dispatch(sendMessageAC(newText));
                    }
                    let messgeChange=(newText:string)=>{
                       store.dispatch(addMessageAC(newText));
                    }
                    return (<div >
                            <Dialogs  addMessage={addMessage} messgeChange={messgeChange} messageData={state.messageData}/>
                        </div>
                    )
            }}
            </StoreContext.Consumer>
        </div>
    )


}