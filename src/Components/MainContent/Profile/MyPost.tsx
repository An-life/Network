import React from 'react';
import {Posts} from './Posts';
import {NewPostContainer} from './NewPostContainer';
import StoreContext from '../../../StoreContext';

export const MyPost = () => {
   return(<StoreContext.Consumer>
      {
       (store)=>{
           let state=store.getState();
           let postElements = state.postData.posts.map(p => <Posts post={p.post} like={p.like}/>)
           return (<div>
                   <h2>My posts</h2>
                   <NewPostContainer/>
                   {postElements}
               </div>
           )  }}
   </StoreContext.Consumer>)
}