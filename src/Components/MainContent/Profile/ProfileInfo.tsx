import React from 'react';
import {Preloader} from '../../Common/Preloader';
import {ProfileType} from '../../../redux/profileReduser';

import {ProfileStatusWithHooks} from "./ProfileStatysWithHooks";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export let ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <img src={props.profile.photos.large}/>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
}