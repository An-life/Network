import {Dispatch} from 'redux';
import {authAPI} from '../API/api';
import { AppThunk} from './StoreRedux';
import { stopSubmit} from 'redux-form';

export type ActionAuthType=ReturnType<typeof setAuthUsersData>

type InitialStateType={
    id:null|number
    email:null|string
    login:null|string
    isAuth:boolean
}

let initialState = {
   id:null,
    email:null,
    login:null,
    isAuth:false,
}
type  AuthMainActionType = {
    type: "SET_USERS_DATA"
    payload: {
        id: null | number
        email: null | string
        login: null | string
        isAuth: boolean
    }
}

export const authReducer = (state:InitialStateType = initialState, action: ActionAuthType):InitialStateType  => {
    switch (action.type) {
        case'SET_USERS_DATA':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }

}
export const setAuthUsersData = (id:number|null, email:string|null, login:string|null, isAuth:boolean):AuthMainActionType => {
    return {type:'SET_USERS_DATA' , payload:{id, email, login,isAuth}} as const
}

export const getAuthUsersData=():AppThunk=>(dispatch:Dispatch)=>{
    authAPI.me().then(response => {
        if(response.data.resultCode===0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUsersData(id, email, login, true));
        }
    });
}

export const LoginTC=(email:string,password:string, rememberMe:boolean):AppThunk =>{
   return async (dispatch)=> {
        let response=await authAPI.login(email, password, rememberMe)
            // .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUsersData())
            }else {
                let message=response.data.data.messages.length>0 ? response.data.data.messages[0]:'Some error'
                dispatch(stopSubmit('login',{_error:message}));
            }
    }
}

export const logout=()=>(dispatch:Dispatch)=>{
    authAPI.logout().then(response => {
        if(response.data.resultCode===0){
            dispatch(setAuthUsersData(null, null, null,false));
        }
    });
}
