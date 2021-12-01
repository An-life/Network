import React from 'react';
import  {Field, reduxForm} from 'redux-form';

type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}

export const LoginForm=(props:any)=> {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'login'} placeholder={'login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'password'}/>
            </div>
            <div><Field component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me</div>
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