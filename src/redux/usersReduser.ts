import {usersAPI} from '../API/api';
import {Dispatch} from 'redux';

export type  ActionUserType =
    FollowACActionType
    | UnFollowACActionType
    | SetUsersACActionType
    | SetCurrentPageType
    | SetTotalCountType
    | TogleIsFetchingType
    |
    TogleIsFolliwingProgressType


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

type SetCurrentPageType = {
    type: 'SET_CURRENTPAGE'
    currentPage: number
}

type SetTotalCountType = {
    type: 'SET_TOTALCOUNT'
    count: number
}

type TogleIsFetchingType = {
    type: 'TOGLE_IS_FETCHING'
    isFetching: boolean
}

type TogleIsFolliwingProgressType = {
    type: 'TOGLE_IS_FETCHING_PROGRESS'
    userId: number
    isFetching: boolean
}

export  type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
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
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionUserType): InitialStateType => {
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
                ...state, users: action.users
            }
        case 'SET_CURRENTPAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTALCOUNT': {
            return {
                ...state, totalUsersCount: action.count
            }
        }
        case 'TOGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'TOGLE_IS_FETCHING_PROGRESS': {
            return {
                ...state, followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const accseptfollow = (userID: number) => ({type: 'FOLLOW', userID: userID});
export const accseptunfollow = (userID: number) => ({type: 'UNFOLLOW', userID: userID});
export const setUsers = (users: Array<UserType>) => ({type: 'SET_USERS', users});
export const setCurrentPage = (currentPage: number) => ({type: 'SET_CURRENTPAGE', currentPage});
export const setTotalUsersCount = (totalUsersCount: number) => ({type: 'SET_TOTALCOUNT', count: totalUsersCount});
export const togleIsFetching = (isFetching: boolean) => ({type: 'TOGLE_IS_FETCHING', isFetching});
export const togleIsFollowingProgress = (userId: number, isFetching: boolean) => ({
    type: 'TOGLE_IS_FETCHING_PROGRESS',
    userId,
    isFetching
})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(togleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(togleIsFetching(false));
        });
    }
}
export const follow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(togleIsFollowingProgress(userId, true));
        usersAPI.follow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(accseptfollow(userId));
            }
            dispatch(togleIsFollowingProgress(userId, false));
        })
    }
}
export const unfollow = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(togleIsFollowingProgress(userId, true));
        usersAPI.unfollow(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(accseptunfollow(userId));
            }
            dispatch(togleIsFollowingProgress(userId, false));
        })
    }
}

