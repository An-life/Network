import React from 'react';

import {addPostAC, updatePostAC} from './profileReduser';

type  ActionType = FollowACActionType | UnFollowACActionType | SetUsersACActionType|SetCurrentPageType|SetTotalCountType

type FollowACActionType = {
    type: 'FOLLOW'
    userID: number
}
type UnFollowACActionType = {
    type: 'UNFOLLOW'
    userID: number
}
type SetUsersACActionType = {
    type: 'SET_USERS'
    users: Array<UserType>
}

type SetCurrentPageType={
    type:'SET_CURRENTPAGE'
    currentPage:number
}
type SetTotalCountType={
    type:'SET_TOTALCOUNT'
    count:number
}
export  type InitialStateType = {
    users: Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}


export type UserType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: PhotoType
    status: null | string
    followed: boolean
}
type PhotoType = {
    small: null | string
    large: null | string
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage:1,
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case 'SET_USERS':
            return {
                ...state, users:action.users
            }
        case 'SET_CURRENTPAGE':{
            return {...state, currentPage:action.currentPage}
        }
        case 'SET_TOTALCOUNT':{
            return {
                ...state,totalUsersCount:action.count
            }
        }
        default:
            return state;
    }
}

export const followAC = (userID: number) => ({type: 'FOLLOW', userID: userID});
export const unfollowAC = (userID: number) => ({type: 'UNFOLLOW', userID: userID});
export const setUsersAC = (users: Array<UserType>) => ({type: 'SET_USERS', users});
export const setCurrentPageAC=(currentPage:number)=>({type:'SET_CURRENTPAGE',currentPage});
export const setTotalCountAC=(totalUsersCount:number)=>({type:'SET_TOTALCOUNT',count:totalUsersCount})


