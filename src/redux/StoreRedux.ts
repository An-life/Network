import {combineReducers, createStore} from 'redux';
import {addPostAC, profileReduser, updatePostAC} from './profileReduser';
import {addMessageAC, messageReduser, sendMessageAC} from './messageReduser';
import {followAC, setUsersAC, unfollowAC, usersReducer} from './usersReduser';

export type RootReducerType = typeof rootRedusers;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = typeof store;
let rootRedusers=combineReducers({
    postData :profileReduser,
    messageData :messageReduser,
    UsersPage: usersReducer
})
export type ActionType=ReturnType<typeof addMessageAC >|ReturnType<typeof sendMessageAC >|ReturnType<typeof updatePostAC >|
    ReturnType<typeof addPostAC >| ReturnType<typeof followAC >|ReturnType<typeof unfollowAC >|ReturnType<typeof setUsersAC>

export let store=createStore(rootRedusers);


//@ts-ignore
window.store = store;
