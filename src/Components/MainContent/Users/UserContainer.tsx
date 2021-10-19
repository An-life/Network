import React from 'react';
import { connect } from 'react-redux';
import {AppStateType} from '../../../redux/StoreRedux';
import {Dispatch} from 'redux';
import {followAC, setUsersAC, unfollowAC, UserType} from '../../../redux/usersReduser';
import Users from './Users';

export type MapStateToPropsType={
    usersPage:Array<UserType>
}
export type MapDispatchToPropsType={
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
}
let mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return{
        usersPage:state.UsersPage.users
    }
}
let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
return{
    follow:(userID:number)=>{
        dispatch(followAC(userID))
    },
    unfollow:(userID:number)=>{
        dispatch(unfollowAC(userID))
    },
    setUsers:(users:Array<UserType>)=>{
        dispatch(setUsersAC(users))
    }
}}


export default connect(mapStateToProps,mapDispatchToProps)(Users);