import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../../redux/StoreRedux';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType} from '../../../redux/profileReduser';
import {RouteComponentProps, withRouter} from 'react-router-dom';


type MatchType = {
    userId: string
}
type ConnectedPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<MatchType>
type  MapStateToPropsType = {
    profile: ProfileType | null
    isAuth:boolean
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
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.postData.profile,
    isAuth: state.Auth.isAuth
})

let withRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(withRouterProfileContainer);