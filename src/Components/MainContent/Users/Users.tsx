import React from 'react';
import userPhoto from '../../../assets/images/blank-profile-picture-973460_960_720.webp';
import s from './User.module.css';
import {AppStateType} from '../../../redux/StoreRedux';
import {MapDispatchToPropsType, MapStateToPropsType} from './UserContainer';
import {UserType} from '../../../redux/usersReduser';
import axios from 'axios';
type APIType={
    items:Array<UserType>
    totalCount:number
    error:string
}

class Users extends React.Component< MapStateToPropsType&MapDispatchToPropsType , AppStateType> {

        componentDidMount() {
            axios.get<APIType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                           this.props.setUsers(response.data.items);
                           this.props.setTotalUsersCount(response.data.totalCount);
        });
        }
        onPageChanged=(p:number)=>{this.props.setCurrentPage(p);
            axios.get<APIType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
        }


    render() {
            let pageCount=Math.ceil(this.props.totalUsersCount/this.props.pageSize);
            let pages=[];
            for(let i=1;i<pageCount;i++){
                pages.push(i);
            }

        return<div>
            <div>
                {pages.map(p=>{
                    return <span onClick={(e)=>{this.onPageChanged(p)}} className={this.props.currentPage===p? s.selectedNum:''}>{p}</span>})}
            </div>
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