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
type InitialStateType={
    users:Array<UserType>
}
export type UserType={
    id:number
    photoURL:string
    fullName:string
    followed:boolean
    status:string
    location:LocationType
}
type LocationType={
    city:string
    country:string
}
let initialState={users:[{id:1,photoURL:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',fullName:'Dmitry',followed:true,status:'I love',location:{city:'Minsk',country:'Belarus'}},
        {id:2,photoURL:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',fullName:'Nino',followed:false,status:'I am boss',location:{city:'Moscow',country:'RF'}},
        {id:3,photoURL:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',fullName:'Karl',followed:true,status:'I am a cat',location:{city:'Paris',country:'France'}}]}

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


