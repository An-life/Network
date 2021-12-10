import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ActionProfileType,  profileReduser} from './profileReduser';
import {ActionMessageType, messageReduser} from './messageReduser';
import {ActionUserType,  usersReducer} from './usersReduser';
import {ActionAuthType, authReducer} from './AuthReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {FormAction} from 'redux-form/lib/actions';
import {ActionAppType, AppReducer} from './AppReducer';

// export type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<typeof rootReducers>
export type StoreType = typeof store;
export type ActionType = /*ReturnType<typeof sendMessageAC> |
    ReturnType<typeof addPost> | ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setAuthUsersData>*/ActionMessageType|ActionUserType|
    ActionProfileType|ActionAuthType|ActionAppType

let rootReducers = combineReducers({
    postData: profileReduser,
    messageData: messageReduser,
    UsersPage: usersReducer,
    Auth: authReducer,
    form: formReducer,
    app:AppReducer
})

export let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType|FormAction>

//@ts-ignore
window.store = store;
