import React from 'react';
import s from './FormsControls.module.css'

type PropsType = {
    input: any
    meta: any
    child: any
}
export const FormControl: React.FC<PropsType> = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
            <div> {props.children}</div>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    )
}

export const Textarea: React.FC<PropsType> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>

}

export const Input: React.FC<PropsType> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...props}/></FormControl>
}