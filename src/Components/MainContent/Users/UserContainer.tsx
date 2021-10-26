import React from 'react';
import { connect } from 'react-redux';
import {AppStateType} from '../../../redux/StoreRedux';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../../redux/usersReduser';
import Users from './Users';

export type MapStateToPropsType={
    usersPage:Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
export type MapDispatchToPropsType={
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void

}
let mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return{
        usersPage:state.UsersPage.users,
        pageSize:state.UsersPage.pageSize,
        totalUsersCount:state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
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
    },
    setCurrentPage:(currentPage:number)=>{
        dispatch(setCurrentPageAC(currentPage))
},
    setTotalUsersCount:(totalCount:number)=>{
        dispatch(setTotalCountAC(totalCount))
    }
}}


export default connect(mapStateToProps,mapDispatchToProps)(Users);