import {combineReducers, createStore} from 'redux';
import {addPostAC, profileReduser, updatePostAC} from './profileReduser';
import {addMessageAC, messageReduser, sendMessageAC} from './messageReduser';

export type RootReducerType = typeof rootRedusers;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = typeof store;
let rootRedusers=combineReducers({
    postData :profileReduser,
    messageData :messageReduser
})
export type ActionType=ReturnType<typeof addMessageAC >|ReturnType<typeof sendMessageAC >|ReturnType<typeof updatePostAC >|ReturnType<typeof addPostAC >
export let store=createStore(rootRedusers);