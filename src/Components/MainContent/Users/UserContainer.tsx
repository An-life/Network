import React from 'react';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/StoreRedux';
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    togleIsFollowingProgress,
    unfollow,
    UserType
} from '../../../redux/usersReduser';
import Users from './Users';
import {Preloader} from '../../Common/Preloader';
import {compose} from 'redux';
import {WithAuthRedirect} from '../../../HOC/WithAuthRedirect';
import {
    GetCurrentPageCount, GetFollowingInProgress,
    GetIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../../redux/userSelectors';

export type MapStateToPropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

export type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    togleIsFollowingProgress: (userId: number, isFetching: boolean) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}

export type APIType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

class UsersAIP extends React.Component<MapStateToPropsType & MapDispatchToPropsType, AppStateType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
        /*  this.props.togleIsFetching(true);
         usersAPI.getUsers(this.props.currentPage,this.props.pageSize).then(data => {
              this.props.setUsers(data.items);
              this.props.setTotalUsersCount(data.totalCount);
              this.props.togleIsFetching(false);
          });*/
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
        /*this.props.setCurrentPage(pageNumber);
        this.props.togleIsFetching(true);
        usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.togleIsFetching(false);
        });*/
    }

    render() {
        return (<div>
            <div>{this.props.isFetching ? <Preloader/> : null} </div>
            <div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       usersPage={this.props.usersPage}
                       onPageChanged={this.onPageChanged}
                       followingInProgress={this.props.followingInProgress}
                       togleIsFollowingProgress={this.props.togleIsFollowingProgress}

                /></div>
        </div>)

    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage:getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage: GetCurrentPageCount(state),
        isFetching:GetIsFetching(state) ,
        followingInProgress:GetFollowingInProgress(state)
    }
}

/*let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.UsersPage.users,
        pageSize: state.UsersPage.pageSize,
        totalUsersCount: state.UsersPage.totalUsersCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,
        followingInProgress: state.UsersPage.followingInProgress
    }
}*/
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

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow, unfollow, setCurrentPage,
    togleIsFollowingProgress, getUsersThunkCreator
}), WithAuthRedirect)(UsersAIP)