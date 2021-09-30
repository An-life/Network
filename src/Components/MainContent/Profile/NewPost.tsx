import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css'

type NewPostPropsType = {
    newPostText: string
    addPost: (post:string) => void
    updatePost: (newText: string) => void
}
export const NewPost = (props: NewPostPropsType) => {

    let addPost = () => {
        props.addPost(props.newPostText);
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePost(e.currentTarget.value);
    }

    return (<div>
            <textarea  onChange={onPostChange} value={props.newPostText}></textarea>
            <span><button onClick={addPost}>Send</button></span>
        </div>
    )
}