import React from 'react';

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

        <img src={props.profile.photos.large}/>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
}