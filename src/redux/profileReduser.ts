import {PostDataType} from '../App';


type  ActionType=ReturnType<typeof updatePostAC >|
    ReturnType<typeof addPostAC >

let initialState = {
    posts: [
        {id: 1, post: 'Hi!', like: 3},
        {id: 2, post: 'Yo!', like: 4},
        {id: 3, post: 'Like!', like: 1}
    ],
    newPostText: ''
}
export const profileReduser = (state: PostDataType = initialState, action: ActionType): PostDataType => {
    switch (action.type) {
        case 'ADD_POST':{
            let postMessage = {
            id: 5,
            post: state.newPostText,
            like: 3
        };
            let stateCopy= {...state,posts : [...state.posts,postMessage],newPostText:''};
            return stateCopy;
           }

        case 'UPDATE_POST':{
            return {...state,newPostText : action.newText};
        }
        default:
            return state;
    }
    /*if(action.type==='ADD_POST'){
        let postMessage={
            id: 5,
            post:state.newPostText,
            like: 3
        }
        state.posts.push(postMessage);
        state.newPostText='';
    }else if(action.type==='UPDATE_POST'){
       state.newPostText=action.newText;}
    return state;*/
}
export const updatePostAC = (newText: string) => {

    return {type: 'UPDATE_POST', newText: newText} as const
}
export const addPostAC = () => {
    return {type: 'ADD_POST'} as const
}