import React from 'react';
import {AppStateType} from '../../redux/StoreRedux';
import {Header} from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUsersData} from '../../redux/AuthReducer';

type APIType={
    resultCode:number
    messages: [],
    data:  DataType
}
type DataType={
    id: number
    email: string
    login:string
}
type MapDispatchToPropsType={
    setAuthUsersData:(userId:null|number, email:null|string, login:null|string)=>void
}
type MapStateToPropsType={
    login:string|null
    isAuth:boolean
}
 class HeaderApi extends React.Component< MapStateToPropsType&MapDispatchToPropsType , AppStateType>{
    componentDidMount() {
        axios.get<APIType>(`https://social-network.samuraijs.com/api/1.0/auth/me}`,
            {withCredentials:true} ).then(response => {
                if(response.data.resultCode===0){
                    let {id, email, login}=response.data.data
                    this.props.setAuthUsersData(id, email, login);
                }

        });
    }
    render() {
        return <Header {...this.props}/>;
    }
}
let mapStateToProps=(state:AppStateType): MapStateToPropsType=>(
    {isAuth:state.Auth.isAuth,
    login:state.Auth.login})


export  default connect(mapStateToProps,{setAuthUsersData})(HeaderApi);