import React, {ChangeEvent} from 'react';
import {ActionType} from '../../../redux/state';
import {addPostAC, updatePostAC} from '../../../redux/profileReduser';
import {NewPost} from './NewPost';
import {StoreType} from '../../../redux/StoreRedux';

type NewPostContainerPropsType = {
   store:StoreType
}


export const NewPostContainer = (props: NewPostContainerPropsType) => {
    let state=props.store.getState();
    let addPost = () => {
        let newText=state.postData.newPostText
        props.store.dispatch(addPostAC(newText));
    }
    let onPostChange = (newText:string) => {
        props.store.dispatch(updatePostAC(newText));
    }

    return (<div>
            <NewPost addPost={addPost}  ubdatePost={ onPostChange} newPostText={state.postData.newPostText}/>
        </div>
    )
}