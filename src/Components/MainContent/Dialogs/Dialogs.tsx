import React from 'react';
import s from './Dialogs.module.css'
import {DialogsItems} from './DialogsItems';
import {Messages} from './Messages';
import {MessagesType} from '../../../App';
import {Redirect} from 'react-router';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../Common/FormsControls';
import {maxLengthCreator, required} from '../../../utils/validators/validators';

type PropsType = {
    addMessage: (newMessageBody: string) => void
    messageData: MessagesType
    isAuth: boolean
}

export const Dialogs = (props: PropsType) => {

    let dialogElements = props.messageData.dialogsData.map(d => <DialogsItems key={d.id} id={d.id} name={d.name}/>)

    let messageElement = props.messageData.messageData.map(m => <Messages key={m.id} message={m.message}/>)

    let addNewMessage = (values: FormDataType) => {
        props.addMessage(values.newMessageBody)
    }
    if (props.isAuth == false) return <Redirect to={'/Login'}/>

    return (<div className={s.containerDialogs}>
            <div>
                {dialogElements}
            </div>
            <div>
                {messageElement}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength = maxLengthCreator(50)

let AddMessageForm = (props: any) => {
    return <form onSubmit={(props.handleSubmit)}>
        <div><Field component={Textarea} validate={[required, maxLength]} name={'newMessageBody'}
                    placeholder={'Enter yout message...'}/></div>
        <div>
            <button>Send</button>
        </div>

    </form>
}
type FormDataType = {
    newMessageBody: string
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogMessageForm'})(AddMessageForm);