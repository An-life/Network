import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App, {StateType} from './App';
import {store} from './redux/state';
type AppPropsType={
    state:StateType
    addPost:()=>void
    updatePost:(newText:string)=>void
}
export let renderTree=()=>{ReactDOM.render(
    <React.StrictMode>
        < App state={store.getState()} addPost={store.addPost.bind(store)}  updatePost={store.updatePost.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
)
;}

renderTree();
store.subsriber(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
