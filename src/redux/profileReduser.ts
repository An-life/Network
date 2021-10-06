import {ActionType} from './state';
import {PostDataType} from '../App';

let initialState={
     posts:[
            {id: 1, post: 'Hi!', like: 3},
            {id: 2, post: 'Yo!', like: 4},
            {id: 3, post: 'Like!', like: 1}
        ],
        newPostText:''
}
export const  profileReduser=(state=initialState,action:ActionType):PostDataType=>{
    if(action.type==='ADD_POST'){
        let postMessage={
            id: 5,
            post:action.newText,
            like: 3
        }
        state.posts.push(postMessage);
        state.newPostText='';

    }else if(action.type==='UPDATE_POST'){
       state.newPostText=action.newText;}
    return state;
}
export const updatePostAC=(newText:string):ActionType=>{
    return {type:'UPDATE_POST',newText:newText}
}
export const addPostAC=(newText:string):ActionType=>{
    return {type:'ADD_POST',newText:newText}}