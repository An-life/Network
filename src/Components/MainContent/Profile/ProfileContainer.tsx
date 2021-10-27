import React from 'react';
import {Profile} from './Profile';
import {AppStateType} from '../../../redux/StoreRedux';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../../redux/profileReduser';


type  MapStateToPropsType={
    profile:ProfileType|null
}
type MapDispatchToPropsType={
    setUserProfile:(profile:ProfileType)=>void
}
export type APIType=ProfileType
class ProfileContainer extends React.Component< MapStateToPropsType&MapDispatchToPropsType , AppStateType>{
    componentDidMount() {
        axios.get<APIType>(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer);