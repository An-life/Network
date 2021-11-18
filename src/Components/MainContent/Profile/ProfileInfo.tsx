import React from 'react';
import s from './Profile.module.css';
import {Preloader} from '../../Common/Preloader';
import {ProfileType} from '../../../redux/profileReduser';
import {ProfileStatus} from './ProfileStatus';


type PropsType={
    profile:ProfileType|null
    status:string
    updateStatus:(status: string) => void
}

export let ProfileInfo = (props:PropsType) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <div>
        <div className={s.mainImg}>
            <img
                src={'https://images.pexels.com/photos/756861/pexels-photo-756861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
                alt="Main Picture"/>
        </div>
        <img src={props.profile.photos.large}/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
}