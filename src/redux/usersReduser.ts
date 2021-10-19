import React from 'react';

import {addPostAC, updatePostAC} from './profileReduser';
type  ActionType=FollowACActionType|UnFollowACActionType|SetUsersACActionType

type FollowACActionType={
    type:'FOLLOW'
    userID:number
}
type UnFollowACActionType={
    type:'UNFOLLOW'
    userID:number
}
type SetUsersACActionType={
    type:'SET_USERS'
    users:Array<UserType>
}
export  type InitialStateType={
    users:Array<UserType>}

export type UserType={
    name: string
    id: number
    uniqueUrlName: null|string
    photos: PhotoType
    status: null|string
    followed: boolean
}
type PhotoType={
    small: null|string
    large: null|string
}

let initialState={
    users:[]
}

export const usersReducer=(state: InitialStateType=initialState,action:ActionType): InitialStateType=>{
    switch (action.type){
        case'FOLLOW':
        return {
            ...state,
            users: state.users.map(u=>{
                if (u.id===action.userID){
                    return{...u,followed:true}
                }return u;
            })
        }
        case 'UNFOLLOW':
        return {
            ...state,
            users: state.users.map(u=>{
                if (u.id===action.userID){
                    return{...u,followed:false}
                }return u;
            })
        }
        case 'SET_USERS':
            return {
                ...state,users:[...state.users,...action.users]
            }
        default:
            return state;
    }
}

export const followAC=(userID:number)=>( {type:'FOLLOW',userID:userID});
export const unfollowAC=(userID:number)=>( {type:'UNFOLLOW',userID:userID});
export const setUsersAC=(users:Array<UserType> )=>( {type:'SET_USERS',users});


