

import {MessagesType} from '../App';
import {ActionType} from './StoreRedux';



 let initialState= {
     dialogsData: [
         {id: 1, name: 'Anna'},
         {id: 2, name: 'Nik'},
         {id: 3, name: 'Mike'},
         {id: 4, name: 'Dima'},
         {id: 6, name: 'Nino'},

     ],
     messageData: [
         {id: 1, message: 'Hi!'},
         {id: 2, message: 'Yes'},
         {id: 3, message: 'No'},
         {id: 4, message: 'Love'},
         {id: 5, message: 'Look'},
     ],
     newMessage:''

 }

export const  messageReduser=(state:MessagesType=initialState ,action:ActionType):MessagesType=>{
    if(action.type==='ADD_MESSAGE'){
        state.newMessage=action.newText;
    }else if(action.type==='SEND_MESSAGE'){
        let newMessageText=state.newMessage;
        state.newMessage=''
       state.messageData.push({id: 1, message: newMessageText});
    }
    return state;
}
export const addMessageAC=(newText:string)=>{
    return {type:'ADD_MESSAGE',newText:newText}as const}
export const sendMessageAC=()=>{
    return {type:'SEND_MESSAGE'}as const}