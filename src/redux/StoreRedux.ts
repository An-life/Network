import {combineReducers, createStore} from 'redux';
import {addPost, profileReduser, updatePost} from './profileReduser';
import {addMessageAC, messageReduser, sendMessageAC} from './messageReduser';
import {follow, setUsers, unfollow, usersReducer} from './usersReduser';

export type RootReducerType = typeof rootRedusers;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = typeof store;
let rootRedusers=combineReducers({
    postData :profileReduser,
    messageData :messageReduser,
    UsersPage: usersReducer
})
export type ActionType=ReturnType<typeof addMessageAC >|ReturnType<typeof sendMessageAC >|ReturnType<typeof updatePost >|
    ReturnType<typeof addPost >| ReturnType<typeof follow >|ReturnType<typeof unfollow >|ReturnType<typeof setUsers>

export let store=createStore(rootRedusers);


//@ts-ignore
window.store = store;
