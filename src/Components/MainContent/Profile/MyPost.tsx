import React from 'react';
import s from './MyPost.module.css'
import {NewPost} from './NewPost';
import {Posts} from './Posts';
import {PostDataType} from '../../../App';
type PropsType={
    postData:PostDataType
    addPost:()=>void
    updatePost:(newText:string)=>void
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
            <NewPost  newPostText={props.postData.newPostText} addPost={props.addPost} updatePost={props.updatePost}/>
            {postElements}
        </div>

    )
}