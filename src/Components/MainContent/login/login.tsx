import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from '../../Common/FormsControls';
import {required} from '../../../utils/validators/validators';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../../redux/StoreRedux';
import {LoginTC} from '../../../redux/AuthReducer';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type  MapDispatchPropsType = {
    LoginTC: (email: string, password: string, rememberMe: boolean) => void
}
type MapStatePropsType = {
    isAuth: boolean
}

type AllType = MapStatePropsType & MapDispatchPropsType


export const LoginForm: React.FC<InjectedFormProps<FormDataType>>
    = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'email'} validate={[required]}/>
            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'password'} validate={[required]}
                       type={'password'}/>
            </div>
            <div><Field component={Input} name={'rememberMe'} type={'checkbox'} validate={[required]}/>remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

const Login = (props: AllType) => {
    const onSubmit = (formData: FormDataType) => {
        props.LoginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.Auth.isAuth
})
export default connect(mapStateToProps, {LoginTC})(Login);