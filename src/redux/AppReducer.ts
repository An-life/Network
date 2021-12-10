import {Dispatch} from 'redux';
import {getAuthUsersData} from './AuthReducer';
import {ActionType, AppThunk} from './StoreRedux';


type InitialStateType = {
    initialized: boolean
}
let initialState = {
    initialized: false
}

export const AppReducer = (state: InitialStateType = initialState, action: ActionAppType): InitialStateType => {
    switch (action.type) {
        case'SET_INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const SetInitializedSuccess = () => ({type: 'SET_INITIALIZED'}) as const

export const initializeApp = (): AppThunk => (dispatch) => {
    let promise = dispatch(getAuthUsersData())
    Promise.all([promise])
        .then(() => {
            dispatch(SetInitializedSuccess())
        })
}

export type ActionAppType = ReturnType<typeof SetInitializedSuccess>


