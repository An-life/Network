
import React, {ComponentType} from 'react';
import {AppStateType} from '../redux/StoreRedux';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

type  MapStateToPropsRedirectType = {
    isAuth:boolean
}

let mapStateToPropsRedirect = (state: AppStateType): MapStateToPropsRedirectType => ({
    isAuth: state.Auth.isAuth
})

export function WithAuthRedirect<T>(Component:ComponentType<T>){
    let RedirectComponent=(props:MapStateToPropsRedirectType)=>{
     let {isAuth,...restProps}= props;
     if(!isAuth){return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>

    }
     let AuthRedirectComponent=connect(mapStateToPropsRedirect)(RedirectComponent);
    return AuthRedirectComponent;
}

