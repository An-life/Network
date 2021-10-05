import React from 'react';
import './App.css';
import {Header} from './Components/Header/Header';
import {Nav} from './Components/Nav/Nav';
import {Profile} from './Components/MainContent/Profile/Profile';
import {Dialogs} from './Components/MainContent/Dialogs/Dialogs';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {News} from './Components/MainContent/News/News';
import {Music} from './Components/MainContent/Music/Music';
import {Settings} from './Components/MainContent/Settings/Settings';
import {ActionType} from './redux/state';


type AppPropsType={
    state:StateType
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
type MessagesType = {
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

function App(props:AppPropsType) {

    return (<BrowserRouter>
            <div className="App">
                <Header/>
                <div className="InfContainer">
                    <Nav/>
                    <div className="appMainContent">
                        <Route path="/profile" render={()=><Profile postData={props.state.postData} dispatch={props.dispatch} />}/>
                        <Route path="/dialogs" render={()=><Dialogs dialogsData={props.state.messages.dialogsData}
                                                                    messageData={props.state.messages.messageData}
                                                                    newMessage={props.state.messages.newMessage}
                                                                    dispatch={props.dispatch}
                        />}/>
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
