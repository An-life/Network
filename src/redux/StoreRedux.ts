import {applyMiddleware, combineReducers, createStore} from 'redux';
import {addPost, profileReduser, updatePost} from './profileReduser';
import {messageReduser, sendMessageAC} from './messageReduser';
import {follow, setUsers, unfollow, usersReducer} from './usersReduser';
import {authReducer, setAuthUsersData} from './AuthReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

export type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducerType>
export type StoreType = typeof store;
export type ActionType = ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updatePost> | ReturnType<typeof addPost> | ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setAuthUsersData>

let rootReducers = combineReducers({
    postData: profileReduser,
    messageData: messageReduser,
    UsersPage: usersReducer,
    Auth: authReducer,
    form: formReducer
})

export let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;
