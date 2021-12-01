import React from 'react';
import  {Field, reduxForm} from 'redux-form';
import {Input} from '../../Common/FormsControls';
import {required} from '../../../utils/validators/validators';

type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}

export const LoginForm=(props:any)=> {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'login'} placeholder={'login'} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'password'} validate={[required]}/>
            </div>
            <div><Field component={Input} name={'rememberMe'} type={'checkbox'} validate={[required]}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}


const LoginReduxForm=reduxForm<FormDataType>({form:'login'})(LoginForm);

export const Login=()=>{
    const onSubmit=(formData:FormDataType)=>{
      console.log(formData)
    }
    return<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}