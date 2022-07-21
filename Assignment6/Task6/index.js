console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

    const PromiseToShow = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });
    const getPopcorn =  new Promise((resolve, reject) => {
            setTimeout(() => resolve('popcorn'), 3000);
    });
    
    const getCandy =  new Promise((resolve, reject) => {
            setTimeout(() => resolve('candy'), 3000);
    });
    
    const getCoke =  new Promise((resolve, reject) => {
            setTimeout(() => resolve('coke'), 3000);
    });

    let ticket = await person3PromiseToShow;
  
    let [ popcorn, candy, coke ] =
    await Promise.all([ getPopcorn, getCandy, getCoke  ]);

    console.log(`got ${popcorn}, ${candy}, ${coke}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');






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


async function init(){
    await createPost({title:'Post Three', body:'This is post three' })
    getPosts();
}

async function final(){
    await deletePost();
    getPosts();

}

init();

/* Async await is easier to read and understand and looks similiar to synchronous program where as promise chaining makes it bit difficult to understand*/

function log(url) {
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      }).catch(err => {
        console.error( err);
      });
  }


  async function logData(url) {
    try {
      const res = await fetch(url);
      console.log(await res.json());
    }
    catch (err) {
      console.log(err);
    }
  }