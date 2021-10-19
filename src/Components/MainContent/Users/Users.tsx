import React from 'react';
import userPhoto from '../../../assets/images/blank-profile-picture-973460_960_720.webp';
import s from './User.module.css';
import * as axios from 'axios';


class Users extends React.Component<any, any> {
    getUsers = () => {
        if (this.props.usersPage.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            });
        }
    }

    render() {
        return<div>
            <button onClick={this.getUsers}>Get users</button>
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