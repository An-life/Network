import React from 'react';
import {addMessageAC, sendMessageAC} from '../../../redux/messageReduser';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {MessagesType} from '../../../App';
import {Dispatch} from 'redux';
import {AppStateType} from '../../../redux/StoreRedux';


type MapStateToPropsType = {
    messageData: MessagesType
    isAuth:boolean
}
type MapDispatchToPropsType = {
    addMessage: () => void
    messageChange: (newText: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messageData: state.messageData,
        isAuth: state.Auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch,): MapDispatchToPropsType => {

    return {
        addMessage: () => {
            dispatch(sendMessageAC())
        },
        messageChange: (newText: string) => {
            dispatch(addMessageAC(newText))
        }
    }
}

export const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

