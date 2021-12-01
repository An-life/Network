import React from 'react';
import './App.css';
import {Nav} from './Components/Nav/Nav';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {News} from './Components/MainContent/News/News';
import {Music} from './Components/MainContent/Music/Music';
import {Settings} from './Components/MainContent/Settings/Settings';

import {DialogContainer} from './Components/MainContent/Dialogs/DialogContainer';
import UserContainer from './Components/MainContent/Users/UserContainer';
import ProfileContainer from './Components/MainContent/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import {Login} from './Components/MainContent/login/login';

export type StateType = {
    postData: PostDataType
    messages: MessagesType
}

export type PostDataType = {
    posts: Array<PostType>
    newPostText: string
}

type PostType = {
    id: number,
    post: string,
    like: number
}

export type MessagesType = {
    dialogsData: Array<DialogsType>,
    messageData: Array<MessageType>
}

type DialogsType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

function App() {

    return (<BrowserRouter>
            <div className="App">
                <HeaderContainer/>
                <div className="InfContainer">
                    <Nav/>
                    <div className="appMainContent">
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogContainer/>}/>
                        <Route path="/users" render={() => <UserContainer/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
