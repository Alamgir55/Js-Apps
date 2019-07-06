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
function createpost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    }, 2000);
}


createpost({title: 'Post Three', body: 'This is post three'}, getpost);
