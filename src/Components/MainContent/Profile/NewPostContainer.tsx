import React from 'react';
import {addPost} from '../../../redux/profileReduser';
import {NewPost} from './NewPost';
import {AppStateType} from '../../../redux/StoreRedux';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost:( newPostText:string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newPostText: state.postData.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: ( newPostText:string) => {
            dispatch(addPost( newPostText));
        }
    }
}

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);