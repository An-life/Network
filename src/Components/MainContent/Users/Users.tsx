import React from 'react';
import userPhoto from '../../../assets/images/blank-profile-picture-973460_960_720.webp';
import s from './User.module.css';
import * as axios from 'axios';
import {AppStateType} from '../../../redux/StoreRedux';
import {MapDispatchToPropsType, MapStateToPropsType} from './UserContainer';


class Users extends React.Component< MapStateToPropsType&MapDispatchToPropsType , AppStateType> {

        componentDidMount() {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
        }


    render() {
        return<div>
            {
                this.props.usersPage.map(u => <div key={u.id}>
                <span>
                    <div><img src={u.photos.small != null ? u.photos.small : userPhoto} alt='UserPhoto' className={s.userImg}/></div>
                    <div>{u.followed ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>UnFollow</button> : <button onClick={() => {
                        this.props.follow(u.id)
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
        </div>
    }
}

export default Users;