import React from 'react';
import {AppStateType} from '../../redux/StoreRedux';
import {Header} from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/AuthReducer';

//types
export type DataType = {
    id: number
    email: string
    login: string
    messages: Array<string>
}

type MapStateToPropsType = {
    login: string | null
    isAuth: boolean
}

//component
class HeaderApi extends React.Component<MapStateToPropsType, AppStateType> {
    render() {
        return <Header {...this.props} logout={logout}/>;
    }
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => (
    {
        isAuth: state.Auth.isAuth,
        login: state.Auth.login
    })

export default connect(mapStateToProps, {logout})(HeaderApi);