import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css'
import {ActionType, addPostAC, updatePostAC} from '../../../redux/state';

type NewPostPropsType = {
    newPostText: string
    dispatch:(action:ActionType)=>void
}


export const NewPost = (props: NewPostPropsType) => {

    let addPost = () => {
let newText=props.newPostText
        props.dispatch(addPostAC(newText));
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
         let newText=e.currentTarget.value;
        props.dispatch(updatePostAC(newText));
    }

    return (<div>
            <textarea  onChange={onPostChange} value={props.newPostText}></textarea>
            <span><button onClick={addPost}>Send</button></span>
        </div>
    )
}