import {Dispatch} from 'redux';
import {authAPI} from '../API/api';

type ActionType=ReturnType<typeof setAuthUsersData>

type InitialStateType={
    userId:null|number
    email:null|string
    login:null|string
    isAuth:boolean
}

let initialState = {
   userId:null,
    email:null,
    login:null,
    isAuth:false,
}


export const authReducer = (state:InitialStateType = initialState, action: ActionType):InitialStateType  => {
    switch (action.type) {
        case'SET_USERS_DATA':
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state;
    }

}
export const setAuthUsersData = (userId:number|null, email:string|null, login:string|null) => {
    return {type:'SET_USERS_DATA' , data:{userId, email, login}} as const
}

export const getAuthUsersData=()=>(dispatch:Dispatch)=>{
    authAPI.me().then(response => {
        if(response.data.resultCode===0){
            let {id, email, login}=response.data.data
            dispatch(setAuthUsersData(id, email, login));
        }
    });
}
