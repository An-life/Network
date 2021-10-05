import {ActionType} from './state';
import {PostDataType} from '../App';

export const  profileReduser=(state: PostDataType,action:ActionType)=>{
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