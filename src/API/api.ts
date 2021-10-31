import axios from 'axios';
import {APIType} from '../Components/MainContent/Users/UserContainer';

const instance=axios.create({withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'13158516-512e-4eb5-8351-d4d4ecf9c6e7'
    }});

 export const usersAPI={
     getUsers(currentPage:number=1,pageSize:number=10){
         return  instance.get<APIType>( `users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)}
 }
