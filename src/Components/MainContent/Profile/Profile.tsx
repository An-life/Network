import React from 'react';
import s from './Profile.module.css'
import {MyPost} from './MyPost';
import {PostDataType} from '../../../App';
import {updatePost} from '../../../redux/state';

type PropsType={
    postData:PostDataType
    addPost:()=>void
    updatePost:(newText:string)=>void
}
type PostType={
    id:number,
    post:string,
    like:number
}

export const Profile=(props:PropsType)=>{
    let postData = [
        {id: 1, post: 'Hi!', like: 3},
        {id: 2, post: 'Yo!', like: 4},
        {id: 3, post: 'Like!', like: 1}
    ]
    return(<div className={s.mainProfile}>
        <div className={s.mainImg} >
            <img src={'https://images.pexels.com/photos/756861/pexels-photo-756861.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'} alt='Main Picture' />
        </div>
        <div>
            Ava+Discription
        </div>
            <MyPost postData={props.postData} addPost={props.addPost} updatePost={props.updatePost}/>
        </div>
    )
}