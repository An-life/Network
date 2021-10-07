import React, {ChangeEvent} from 'react';
import {ActionType} from '../../../redux/state';
import {addPostAC, updatePostAC} from '../../../redux/profileReduser';

type NewPostContainerPropsType = {
    newPostText: string
    dispatch:(action:ActionType)=>void
}


export const NewPostContainer = (props: NewPostContainerPropsType) => {

    let addPost = () => {
        let newText=props.newPostText
        props.dispatch(addPostAC(newText));
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let newText=e.currentTarget.value;
        props.dispatch(updatePostAC(newText));
    }

    return (<div>
            <NewPost />
        </div>
    )
}