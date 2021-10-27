import React from 'react';
import { connect } from 'react-redux';
import {AppStateType} from '../../../redux/StoreRedux';
import {Dispatch} from 'redux';
import {
    follow,
    setCurrentPage, setTotalUsersCount,
    setUsers, togleIsFetching,
    unfollow,
    UserType
} from '../../../redux/usersReduser';
import Users from './Users';
import axios from 'axios';
import {Preloader} from '../../Common/Preloader';


export type MapStateToPropsType={
    usersPage:Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
    isFetching:boolean
}
export type MapDispatchToPropsType={
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    setUsers:(users:Array<UserType>)=>void
    setCurrentPage:(currentPage:number)=>void
    setTotalUsersCount:(totalCount:number)=>void
    togleIsFetching:(isFetching:boolean)=>void
}
export type APIType={
    items:Array<UserType>
    totalCount:number
    error:string
}

class UsersAIP extends React.Component< MapStateToPropsType&MapDispatchToPropsType , AppStateType> {

    componentDidMount() {
        this.props.togleIsFetching(true);
        axios.get<APIType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.togleIsFetching(false);
        });
    }
    onPageChanged=(p:number)=>{this.props.setCurrentPage(p);
        this.props.togleIsFetching(true);
        axios.get<APIType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.togleIsFetching(false);
        });
    }
    render() {
       return (<div>
           <div>{this.props.isFetching?<Preloader/>:null} </div>
           <div>
           <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      usersPage={this.props.usersPage}
                      onPageChanged={this.onPageChanged}
           /></div></div>)

}}

let mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return{
        usersPage:state.UsersPage.users,
        pageSize:state.UsersPage.pageSize,
        totalUsersCount:state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching:state.UsersPage.isFetching
    }
}
/*let mapDispatchToProps=(dispatch:Dispatch):MapDispatchToPropsType=>{
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
    },
    togleIsFetching:(isFetching:boolean)=>{
        dispatch(TogleIsFetchingAC(isFetching))
    }
}}*/


export default connect(mapStateToProps,{follow, unfollow, setUsers, setCurrentPage,
    setTotalUsersCount, togleIsFetching})(UsersAIP);