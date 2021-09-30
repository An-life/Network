let renderTree=()=>{
}

export let state = {
    postData:{ posts:[
            {id: 1, post: 'Hi!', like: 3},
            {id: 2, post: 'Yo!', like: 4},
            {id: 3, post: 'Like!', like: 1}
        ],
    newPostText:''}
   ,
    messages: {
        dialogsData: [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Nik'},
            {id: 3, name: 'Mike'},
            {id: 4, name: 'Dima'},
            {id: 6, name: 'Nino'},

        ],
        messageData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'Yes'},
            {id: 3, message: 'No'},
            {id: 4, message: 'Love'},
            {id: 5, message: 'Look'},
        ]
    }
}

export  let addPost=()=>{
    let postMessage={
        id: 5,
        post:state.postData.newPostText,
        like: 3
    }
    state.postData.posts.push(postMessage);
    state.postData.newPostText='';
    renderTree();
}

export let updatePost=(newText:string)=>{
    state.postData.newPostText=newText;
    renderTree();
}
export const subsriber=(observer:()=>void)=>{
    renderTree=observer;
}