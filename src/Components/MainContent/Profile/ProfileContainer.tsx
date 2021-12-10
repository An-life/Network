import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../../redux/StoreRedux';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, updateStatus} from '../../../redux/profileReduser';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from '../../../HOC/WithAuthRedirect';
import {compose} from 'redux';

type MatchType = {
    userId: string
}

type ConnectedPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<MatchType>

type  MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    autorizedUserId:number|null
    isAuth:boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void

}

export type APIType = ProfileType

class ProfileContainer extends React.Component<ConnectedPropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.autorizedUserId);
            if(!userId){
                this.props.history.push('/login');
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.postData.profile,
    status: state.postData.status,
    autorizedUserId:state.Auth.id,
    isAuth:state.Auth.isAuth
})

export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus
}), withRouter, WithAuthRedirect)(ProfileContainer);