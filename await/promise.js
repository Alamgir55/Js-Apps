posts = [
    {title: 'Post one', body: 'This is post One'},
    {title: 'Post two', body: 'This is post Two'}
];
function getpost(){
    setTimeout(()=>{
        output = '';
        posts.forEach((post)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output; 
    }, 1000);
}
function createpost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);
        const error = false;
            if(!error){
                resolve();
            }else{
                reject('some');
            }
        }, 2000);
    });
}

/* createpost({title: 'Post Three', body: 'This is post three'})
    .then(getpost)
    .catch((err)=>console.log(err));
 */

// const promise1 = Promise.resolve('Helloww');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(resolve, 2000, 'Goodbye');
// });
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise2, promise3, promise4])
//     .then(values=>console.log(values));

/* async function init(){
    await createpost({title: 'Post Three', body: 'The Post Three'});

    getpost();
}
init(); */
async function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    console.log(data);
}
fetchData();