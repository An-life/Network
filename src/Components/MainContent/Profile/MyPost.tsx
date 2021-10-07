import React from 'react';
import s from './MyPost.module.css'
import {NewPost} from './NewPost';
import {Posts} from './Posts';
import {PostDataType} from '../../../App';
import {ActionType} from '../../../redux/state';
import {NewPostContainer} from './NewPostContainer';
type PropsType={
    postData:PostDataType
    dispatch:(action:ActionType)=>void
}
type PostType={
    id:number,
    post:string,
    like:number
}
export const MyPost = (props:PropsType) => {

    let postElements = props.postData.posts.map(p => <Posts post={p.post} like={p.like}/>)
    return (<div>
            <h2>My posts</h2>
            <NewPostContainer  newPostText={props.postData.newPostText}  dispatch={props.dispatch}/>
            {postElements}
        </div>

    )
}