
import {ActionType} from './state';
import {MessagesType} from '../App';

export const  messageReduser=(state:MessagesType ,action:ActionType)=>{
    if(action.type==='ADD_MESSAGE'){
        state.newMessage=action.newText;
    }else if(action.type==='SEND_MESSAGE'){
        let newMessageText=state.newMessage;
        state.newMessage=''
       state.messageData.push({id: 1, message: newMessageText});
    }
    return state;
}
export const addMessageAC=(newText:string):ActionType=>{
    return {type:'ADD_MESSAGE',newText:newText}}
export const sendMessageAC=(newText:string):ActionType=>{
    return {type:'SEND_MESSAGE',newText:newText}}