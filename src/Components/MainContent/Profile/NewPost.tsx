import React, {ChangeEvent} from 'react';
import s from './NewPost.module.css'


type NewPostPropsType = {
    addPost: () => void
    ubdatePost: (newText: string) => void
    newPostText:string
}


export const NewPost = (props: NewPostPropsType) => {

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.ubdatePost(newText);
    }

    return (<div>
            <textarea onChange={onPostChange} value={props.newPostText}></textarea>
            <span><button onClick={addPost}>Send</button></span>
        </div>
    )
}
