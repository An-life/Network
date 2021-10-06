import {combineReducers, createStore} from 'redux';
import {profileReduser} from './profileReduser';
import {messageReduser} from './messageReduser';

export type RootReducerType = typeof redusers;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = typeof store;

let redusers=combineReducers({
    postData :profileReduser,
    messageData :messageReduser
})

export let store=createStore(redusers);