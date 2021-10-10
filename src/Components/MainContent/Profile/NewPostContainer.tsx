import React, {ChangeEvent} from 'react';
import {addPostAC, updatePostAC} from '../../../redux/profileReduser';
import {NewPost} from './NewPost';
import {AppStateType} from '../../../redux/StoreRedux';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStateToPropsType={
    newPostText:string
}
type MapDispatchToPropsType={
    addPost: () => void
    ubdatePost: (newText: string) => void
}

let mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return{
        newPostText:state.postData.newPostText
    }
}
let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
    return {
        addPost :() => {
           dispatch(addPostAC());
        },
        ubdatePost:(newText:string) => {
           dispatch(updatePostAC(newText));
        }
}}

export const NewPostContainer=connect(mapStateToProps,mapDispatchToProps)(NewPost);