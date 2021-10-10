import React from 'react';
import {MapDispatchToPropsType, MapStateToPropsType} from './UserContainer';
import s from './User.module.css';


type PropsType= MapStateToPropsType&MapDispatchToPropsType


export const Users=(props:PropsType)=>{
    if(props.usersPage.length===0){
        props.setUsers([{id:1,photoURL:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',fullName:'Dmitry',followed:true,status:'I love',location:{city:'Minsk',country:'Belarus'}},
            {id:2,photoURL:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',fullName:'Nino',followed:false,status:'I am boss',location:{city:'Moscow',country:'RF'}},
            {id:3,photoURL:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',fullName:'Karl',followed:true,status:'I am a cat',location:{city:'Paris',country:'France'}}])
    }

    return<div>
        {
            props.usersPage.map(u=><div key={u.id}>
                <span>
                    <div><img src={u.photoURL} className={s.userImg}/></div>
                    <div>{u.followed?<button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>:<button onClick={()=>{props.follow(u.id)}}>Follow</button>}</div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>




                </div>
                )
        }
    </div>
}