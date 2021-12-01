import {applyMiddleware, combineReducers, createStore} from 'redux';
import {ActionProfileType,  profileReduser} from './profileReduser';
import {ActionMessageType, messageReduser} from './messageReduser';
import {ActionUserType,  usersReducer} from './usersReduser';
import {ActionAuthType, authReducer} from './AuthReducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

// export type RootReducerType = typeof rootReducers;
export type AppStateType = ReturnType<typeof rootReducers>
export type StoreType = typeof store;
export type ActionType = /*ReturnType<typeof sendMessageAC> |
    ReturnType<typeof addPost> | ReturnType<typeof follow> |
    ReturnType<typeof unfollow> |
    ReturnType<typeof setUsers> | ReturnType<typeof setAuthUsersData>*/ActionMessageType|ActionUserType|
    ActionProfileType|ActionAuthType

let rootReducers = combineReducers({
    postData: profileReduser,
    messageData: messageReduser,
    UsersPage: usersReducer,
    Auth: authReducer,
    form: formReducer
})

export let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionType>

//@ts-ignore
window.store = store;
