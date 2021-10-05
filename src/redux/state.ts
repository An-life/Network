import {profileReduser} from './profileReduser';
import {messageReduser} from './messageReduser';

export type ActionType={
    type:'ADD_POST'|'UPDATE_POST'|'ADD_MESSAGE'|'SEND_MESSAGE'
    newText:string
}
 export let store={
     _state : {
         postData:{ posts:[
                 {id: 1, post: 'Hi!', like: 3},
                 {id: 2, post: 'Yo!', like: 4},
                 {id: 3, post: 'Like!', like: 1}
             ],
             newPostText:''}
         ,
         messages: {
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
     },
     getState(){
         return this._state
     },
     _callbackTree(){
     },
     dispatch(action:ActionType){
         this._state.postData=profileReduser(this._state.postData,action);
         this._state.messages=messageReduser(this._state.messages,action);
             this._callbackTree();
     },
     subsriber(observer:()=>void){
         this._callbackTree=observer;
     }
 }







