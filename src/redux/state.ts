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
         if(action.type==='ADD_POST'){
             let postMessage={
                 id: 5,
                 post:action.newText,
                 like: 3
             }
             this._state.postData.posts.push(postMessage);
             this._state.postData.newPostText='';
             this._callbackTree();
         }else if(action.type==='UPDATE_POST'){
             this._state.postData.newPostText=action.newText;
             this._callbackTree();
         }else if(action.type==='ADD_MESSAGE'){
             this._state.messages.newMessage=action.newText;
             this._callbackTree();
         }else if(action.type==='SEND_MESSAGE'){
            let newMessageText= this._state.messages.newMessage;
             this._state.messages.newMessage=''
             this._state.messages.messageData.push({id: 1, message: newMessageText});
             this._callbackTree();
     }},
     subsriber(observer:()=>void){
         this._callbackTree=observer;
     }

 }

export const updatePostAC=(newText:string):ActionType=>{
    return {type:'UPDATE_POST',newText:newText}
}
export const addPostAC=(newText:string):ActionType=>{
    return {type:'ADD_POST',newText:newText}}
export const addMessageAC=(newText:string):ActionType=>{
    return {type:'ADD_MESSAGE',newText:newText}}
export const sendMessageAC=(newText:string):ActionType=>{
    return {type:'SEND_MESSAGE',newText:newText}}




