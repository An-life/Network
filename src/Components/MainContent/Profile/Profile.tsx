import React from 'react';
import s from './Profile.module.css'
import {MyPost} from './MyPost';
import {ProfileInfo} from './ProfileInfo';
import {ProfileType} from '../../../redux/profileReduser';
import {Redirect} from 'react-router';


type PropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
export const Profile = (props: PropsType) => {
    if (props.isAuth == false) return <Redirect to={'/Login'}/>
    return (<div className={s.mainProfile}>

            <ProfileInfo profile={props.profile}/>
            <MyPost/>
        </div>
    )
}