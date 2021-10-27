import React from 'react';
import s from './Profile.module.css'
import {MyPost} from './MyPost';
import {ProfileInfo} from './ProfileInfo';
import {ProfileType} from '../../../redux/profileReduser';



type PropsType={
    profile:ProfileType|null
}
export const Profile=(props:PropsType)=>{

    return(<div className={s.mainProfile}>

       <ProfileInfo profile={props.profile}/>
            <MyPost />
        </div>
    )
}