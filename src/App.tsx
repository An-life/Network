import React from 'react';
import './App.css';
import {Nav} from './Components/Nav/Nav';
import {Route} from 'react-router';
import {BrowserRouter, withRouter} from 'react-router-dom';
import {News} from './Components/MainContent/News/News';
import {Music} from './Components/MainContent/Music/Music';
import {Settings} from './Components/MainContent/Settings/Settings';
import {DialogContainer} from './Components/MainContent/Dialogs/DialogContainer';
import UserContainer from './Components/MainContent/Users/UserContainer';
import ProfileContainer from './Components/MainContent/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/MainContent/login/login';
import {connect, useDispatch} from 'react-redux';
import {AppStateType} from './redux/StoreRedux';
import {compose} from 'redux';
import {initializeApp} from './redux/AppReducer';
import {Preloader} from './Components/Common/Preloader';

//types
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
type MapDispatchToPropsType = {
    initializeApp:()=>void
}
type MapStateToPropsType={
    initialized:boolean

}

//component
class App extends React.Component<MapDispatchToPropsType&MapStateToPropsType, AppStateType> {


    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>
        }
        return (
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
        );
    }
}
const mapStateToProps=(state:AppStateType)=>{
  return  {
        initialized:state.app.initialized
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps ,{initializeApp}))( App);
