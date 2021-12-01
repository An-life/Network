import React from 'react';
import s from './NewPost.module.css'
import  {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../Common/FormsControls';

type NewPostPropsType = {
    addPost: ( newPostText:string) => void
    newPostText: string
}

export const NewPost = (props: NewPostPropsType) => {
    let addPost = (values:FormDataType) => {
        props.addPost(values.newPostText);
    }

    return (<div>
            <AddNewPostForm onSubmit={addPost} />
        </div>
    )
}

const maxLength=maxLengthCreator(20);

let AddPostForm=(props:any)=>{
    return <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newPostText'} validate={[required, maxLength]} placeholder={'Post message'}/>
        <span><button >Send</button></span>
    </form>
}

type FormDataType={
    newPostText:string
}

let AddNewPostForm=reduxForm<FormDataType>({form:'ProfileAddNewPostForm'})(AddPostForm);