import React from 'react';
import s from './Posts.module.css'

type PropsType = {
    post: string
    like: number
}

export const Posts = (props: PropsType) => {
    return (<div>
            <div className={s.avaImg}>
                <img
                    src={'https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
                    alt="Ava"/>
            </div>
            <div>{props.post} like {props.like}</div>
        </div>
    )
}