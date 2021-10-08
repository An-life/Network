import React from 'react';
import s from './MyPost.module.css'
import {NewPost} from './NewPost';
import {Posts} from './Posts';
import {PostDataType} from '../../../App';
import {ActionType} from '../../../redux/state';
import {NewPostContainer} from './NewPostContainer';
import {StoreType} from '../../../redux/StoreRedux';
type PropsType={
   store:StoreType
}
type PostType={
    id:number,
    post:string,
    like:number
}
export const MyPost = (props:PropsType) => {
    let state=props.store.getState();

    let postElements = state.postData.posts.map(p => <Posts post={p.post} like={p.like}/>)
    return (<div>
            <h2>My posts</h2>
            <NewPostContainer  store={props.store}/>
            {postElements}
        </div>

    )
}