import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../../redux/StoreRedux';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../../redux/profileReduser';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type MatchType = {
    userId: string
}
type ConnectedPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<MatchType>
type  MapStateToPropsType={
    profile:ProfileType|null
}
type MapDispatchToPropsType={
    setUserProfile:(profile:ProfileType)=>void
}
export type APIType=ProfileType
class ProfileContainer extends React.Component< ConnectedPropsType, AppStateType>{
    componentDidMount() {
        let userId=this.props.match.params.userId
        if(!userId){
            userId='2';
        }
        axios.get<APIType>(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
let mapStateToProps=(state:AppStateType):MapStateToPropsType=>({
profile: state.postData.profile
})

let withRouterProfileContainer=withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile}) (withRouterProfileContainer);