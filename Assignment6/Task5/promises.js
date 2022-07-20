const posts =[

    {title:'Post One',body:'This is post one'},

    {title:'Post TWO',body:'This is post Two'}

];



function  getPosts(){

    setTimeout(()=>{

        let output ='';

        posts.forEach((post,index)=>{

            output +=`<li>${post.title} </li>`;

        });

        document.body.innerHTML = output;

        

    },1000);

}





function createPost(post){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve()
            }else{
                reject('Error:Something went wrong')
            }
        },2000);
    });
}

function deletePost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            
                post.pop();
                const error = false;
                if(!error)
                    resolve();
                else
                    reject('Error: Array is empty now')
            
        },1000)
    })
}



 

createPost({title:'Post Three',body:'This is post three'})
.then(getPosts)
.catch(err=>console.log(err))

deletePost(posts)
.then(getPosts)
.catch(err=>console.log("Array is empty now"))

createPost({title:'Post Four',body:'This is post four'})
.then(deletePost(posts)
        .then(getPosts)
        .catch(err=>console.log("Array is empty now")))
.catch(err=>console.log(err))


const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,'GoodBye')
})
Promise.all([promise1,promise2,promise3]).then(values=>
    console.log(values))


const user={
    username:'yash',
    lastactivitytime:'13th of Jan'
}
updatelastactivitytime => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime = new  Date().getTime()
            resolve(user.lastactivitytime)
        },1000)
    })
};

userupdatesapost(){
    Promise.all([createPost,updatelastactivitytime])
    .then(([createpostresolves,updatelastactivitytimeresolves])=>{
        console.log(updatelastactivitytimeresolves)
    })
    .catch(err=>console.log(err))
}


/* Both callbacks and promises can make code async. 
Making callbacks async can cause issues such as callback hell, 
On other hand promises instead helps us avoid this pitfall while keeping our code async */



