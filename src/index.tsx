import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {store} from './redux/StoreRedux'
import StoreContext from './StoreContext';
import { Provider } from 'react-redux';


let renderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <StoreContext.Provider value={store}>
                    < App/>
                </StoreContext.Provider>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root'));}
    renderTree();

    store.subscribe(()=>{renderTree()});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
