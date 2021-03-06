import axios from 'axios';
import {UserType} from '../redux/usersReduser';
import {ContactsType, PhotoType} from '../redux/profileReduser';
import {DataType} from '../Components/Header/HeaderContainer';

type APIStatusType = string

type APIType = {
    resultCode: number
    totalCount: number
    items: Array<UserType>
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
    data: DataType
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '13158516-512e-4eb5-8351-d4d4ecf9c6e7'
    }
});

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<APIType>(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(userId: number) {
        return instance.post<APIType>(`follow/${userId}`, {})
    },
    unfollow(userId: number) {
        return instance.delete<APIType>(`follow/${userId}`);
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get<APIType>(`profile/` + userId);
    },
    getStatus(userId: string) {
        return instance.get<APIStatusType>(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instance.put<APIType>(`profile/status/`, {status: status});
    }
}

export const authAPI = {
    me() {
        return instance.get<APIType>(`auth/me`)
    },
    login(email:string,password:string, rememberMe:boolean){
        return instance.post<APIType>(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instance.delete<APIType>(`auth/login`)
    }
}
