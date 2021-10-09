import React, {ChangeEvent} from 'react';
import {ActionType} from '../../../redux/state';
import {addPostAC, updatePostAC} from '../../../redux/profileReduser';
import {NewPost} from './NewPost';
import {StoreType} from '../../../redux/StoreRedux';
import StoreContext from '../../../StoreContext';


export const NewPostContainer = () => {

    return (<div>
            <StoreContext.Consumer>
                {
                (store)=>{
                    let state= store.getState();
                    let addPost = () => {
                        let newText=state.postData.newPostText
                       store.dispatch(addPostAC(newText));
                    }
                    let onPostChange = (newText:string) => {
                        store.dispatch(updatePostAC(newText));
                    }
                   return <NewPost addPost={addPost}  ubdatePost={ onPostChange} newPostText={state.postData.newPostText}/>}

            }
            </StoreContext.Consumer>
        </div>
    )
}