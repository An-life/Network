import React from 'react';
import {addPost, updatePost} from '../../../redux/profileReduser';
import {NewPost} from './NewPost';
import {AppStateType} from '../../../redux/StoreRedux';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updatePost: (newText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        newPostText: state.postData.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPost());
        },
        updatePost: (newText: string) => {
            dispatch(updatePost(newText));
        }
    }
}

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);