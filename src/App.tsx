import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Nav} from './Components/Nav/Nav';
import {Profile} from './Components/MainContent/Profile/Profile';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {News} from './Components/MainContent/News/News';
import {Music} from './Components/MainContent/Music/Music';
import {Settings} from './Components/MainContent/Settings/Settings';
import {ActionType, AppStateType, StoreType} from './redux/StoreRedux';
import {DialogContainer} from './Components/MainContent/Dialogs/DialogContainer';
import UserContainer from './Components/MainContent/Users/UserContainer';



type AppPropsType={
    store:StoreType
    state:AppStateType
    dispatch:(action:ActionType)=>void
}
 export type StateType ={
    postData:PostDataType
    messages: MessagesType
}
export type PostDataType={
    posts:Array<PostType>
    newPostText:string
}
type PostType={
    id:number,
    post:string,
    like:number
}
export type MessagesType = {
    dialogsData: Array<DialogsType>,
    messageData: Array<MessageType>
    newMessage:string
}
type DialogsType = {
    id: number,
    name: string
}
type MessageType = {
    id: number,
    message: string
}


function UsersContainer() {
    return null;
}

function App() {

    return (<BrowserRouter>
            <div className="App">
                <Header/>
                <div className="InfContainer">
                    <Nav/>
                    <div className="appMainContent">
                        <Route path="/profile" render={()=><Profile  />}/>
                        <Route path="/dialogs" render={()=><DialogContainer />}/>
                        <Route path="/users" render={()=><UserContainer />}/>

                        <Route path="/news" render={()=><News/>}/>
                        <Route path="/music" render={()=><Music/>}/>
                        <Route path="/settings" render={()=><Settings/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
