import React from 'react';
import userPhoto from '../../../assets/images/blank-profile-picture-973460_960_720.webp';
import s from './User.module.css';
import {UserType} from '../../../redux/usersReduser';

type PropsType={
    totalUsersCount:number
    pageSize:number
    currentPage:number
    follow:(userID:number)=>void
    unfollow:(userID:number)=>void
    usersPage:Array<UserType>
    onPageChanged:(p:number)=>void
}


let Users=(props:PropsType)=>{
    let pageCount=Math.ceil(props.totalUsersCount/props.pageSize);
    let pages=[];
    for(let i=1;i<pageCount;i++){
        pages.push(i);
    }

    return(<div>
        <div>
            {pages.map(p=>{
                return <span onClick={(e)=>{props.onPageChanged(p)}} className={props.currentPage===p? s.selectedNum:''}>{p}</span>})}
        </div>
        {
            props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt='UserPhoto' className={s.userImg}/></div>
                    <div>{u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>UnFollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}</div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div><div>{u.status}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>)
}




export default Users;