import React from 'react';
import s from './Profile.module.css'
import {MyPost} from './MyPost';



export const Profile=()=>{

    return(<div className={s.mainProfile}>
        <div className={s.mainImg} >
            <img src={'https://images.pexels.com/photos/756861/pexels-photo-756861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt='Main Picture' />
        </div>
        <div>
            Ava+Discription
        </div>
            <MyPost />
        </div>
    )
}