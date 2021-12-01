import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../API/api';

type  ActionType = ReturnType<typeof addPost> | ReturnType<typeof updatePost> |
    ReturnType<typeof setUserProfile> | ReturnType<typeof setStatus>

type InitialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType | null
    status: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}

export type PhotoType = {
    small: string
    large: string
}

export type ContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}

type PostType = {
    id: number,
    post: string,
    like: number
}

let initialState = {
    posts: [
        {id: 1, post: 'Hi!', like: 3},
        {id: 2, post: 'Yo!', like: 4},
        {id: 3, post: 'Like!', like: 1}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

export const profileReduser = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            let postMessage = {
                id: 2,
                post: state.newPostText,
                like: 3
            };
            let stateCopy = {...state, posts: [...state.posts, postMessage], newPostText: ''};
            return stateCopy;
        }

        case 'UPDATE_POST': {
            return {...state, newPostText: action.newText};
        }
        case 'SET_USERPROFILE': {
            return {...state, profile: action.profile}
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;
    }
    /*if(action.type==='ADD_POST'){
        let postMessage={
            id: 5,
            post:state.newPostText,
            like: 3
        }
        state.posts.push(postMessage);
        state.newPostText='';
    }else if(action.type==='UPDATE_POST'){
       state.newPostText=action.newText;}
    return state;*/
}
export const updatePost = (newText: string) => {
    return {type: 'UPDATE_POST', newText: newText} as const
}

export const addPost = () => {
    return {type: 'ADD_POST'} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: 'SET_USERPROFILE', profile} as const
}

export const setStatus = (status: string) => {
    return {type: 'SET_STATUS', status} as const
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
}



