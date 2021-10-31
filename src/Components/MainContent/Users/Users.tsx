import React from 'react';
import userPhoto from '../../../assets/images/blank-profile-picture-973460_960_720.webp';
import s from './User.module.css';
import { UserType} from '../../../redux/usersReduser';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

type APIType = {
    resultCode: number
}

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    usersPage: Array<UserType>
    onPageChanged: (p: number) => void
    followingInProgress: number[]
    togleIsFollowingProgress: (userId:number,isFetching: boolean) => void
}


let Users = (props: PropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i < pageCount; i++) {
        pages.push(i);
    }

    return (<div>
        <div>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? s.selectedNum : ''}>{p}</span>
            })}
        </div>
        {
            props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div><NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="UserPhoto"
                             className={s.userImg}/>
                    </NavLink>
                    </div>
                    <div>{u.followed ? <button disabled={props.followingInProgress.some(id=>id===u.id)} onClick={() => {
                            props.togleIsFollowingProgress(u.id,true);
                            axios.delete<APIType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '13158516-512e-4eb5-8351-d4d4ecf9c6e7'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.togleIsFollowingProgress(u.id,false);
                                });
                        }}>UnFollow</button> :
                        <button onClick={() => {
                            props.togleIsFollowingProgress(u.id,true);
                            axios.post<APIType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': '13158516-512e-4eb5-8351-d4d4ecf9c6e7'
                                }
                            })
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(u.id)
                                    }
                                    props.togleIsFollowingProgress(u.id,false);
                                });
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