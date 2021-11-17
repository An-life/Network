import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../../redux/StoreRedux';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../../../redux/profileReduser';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Redirect} from 'react-router/ts4.0';
import {WithAuthRedirect} from '../../../HOC/WithAuthRedirect';
import {compose} from 'redux';


type MatchType = {
    userId: string
}
type ConnectedPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<MatchType>
type  MapStateToPropsType = {
    profile: ProfileType | null

}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
export type APIType = ProfileType

class ProfileContainer extends React.Component<ConnectedPropsType, AppStateType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }}



let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.postData.profile,
})



export default compose <React.ComponentType>(connect(mapStateToProps, {getUserProfile}), withRouter, WithAuthRedirect)(ProfileContainer);