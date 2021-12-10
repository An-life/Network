import {AppStateType} from './StoreRedux';
import {createSelector} from 'reselect';

 const getUsersSelector=(state:AppStateType)=>{
    return state.UsersPage.users
}
export const getUsers=createSelector(getUsersSelector,(users)=>{
    return users.filter(u=>true)
})
export const getPageSize=(state:AppStateType)=>{
    return state.UsersPage.pageSize
}
export const getTotalUsersCount=(state:AppStateType)=>{
    return state.UsersPage.totalUsersCount
}
export const GetCurrentPageCount=(state:AppStateType)=>{
    return state.UsersPage.currentPage
}
export const GetIsFetching=(state:AppStateType)=>{
    return state.UsersPage.isFetching
}
export const GetFollowingInProgress=(state:AppStateType)=>{
    return state.UsersPage.followingInProgress
}