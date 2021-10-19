import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from './UserContainer';
import s from './User.module.css';
import * as axios from 'axios';
import userPhoto from'../../../assets/images/blank-profile-picture-973460_960_720.webp'
import {UserType} from '../../../redux/usersReduser';

type PropsType= MapStateToPropsType&MapDispatchToPropsType


export const Users=(props:PropsType)=>{
    if(props.usersPage.length===0){
       return  axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
           return response.data.items
        });
    }

    return<div>
        {
            props.usersPage.map(u=><div key={u.id}>
                <span>
                    <div><img src={u.photos.small !=null?u.photos.small:userPhoto} className={s.userImg}/></div>
                    <div>{u.followed?<button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>:<button onClick={()=>{props.follow(u.id)}}>Follow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                </span>




                </div>
                )
        }
    </div>
}