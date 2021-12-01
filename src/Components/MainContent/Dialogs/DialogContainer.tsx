import React from 'react';
import {sendMessageAC} from '../../../redux/messageReduser';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {MessagesType} from '../../../App';
import {compose, Dispatch} from 'redux';
import {AppStateType} from '../../../redux/StoreRedux';
import {WithAuthRedirect} from '../../../HOC/WithAuthRedirect';

type MapStateToPropsType = {
    messageData: MessagesType
    isAuth: boolean
}

type MapDispatchToPropsType = {
    addMessage: (newMessageBody: string) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messageData: state.messageData,
        isAuth: state.Auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch,): MapDispatchToPropsType => {

    return {
        addMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export const DialogContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);
