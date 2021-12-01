import React from 'react';
import {AppStateType} from '../../redux/StoreRedux';
import {Header} from './Header';
import {connect} from 'react-redux';
import {getAuthUsersData, logout} from '../../redux/AuthReducer';

export type DataType = {
    id: number
    email: string
    login: string
}

type MapDispatchToPropsType = {
    getAuthUsersData: () => void
}

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

class HeaderApi extends React.Component<MapStateToPropsType & MapDispatchToPropsType, AppStateType> {
    componentDidMount() {
        this.props.getAuthUsersData();
    }
    render() {
        return <Header {...this.props} logout={logout}/>;
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => (
    {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    })

export default connect(mapStateToProps, {getAuthUsersData, logout})(HeaderApi);