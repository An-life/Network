import axios from 'axios';
import {UserType} from '../redux/usersReduser';


type APIType = {
    resultCode: number
    totalCount:number
    items:Array<UserType>
}
const instance=axios.create({withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'13158516-512e-4eb5-8351-d4d4ecf9c6e7'
    }});

 export const usersAPI={
     getUsers(currentPage:number=1,pageSize:number=10){
         return  instance.get<APIType>( `users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)},
     follow(userId:number){
         return instance.post<APIType>(`follow/${userId}`, {})
     },
     unfollow(userId:number){
        return  instance.delete<APIType>(`follow/${userId}`);
     },

 }
