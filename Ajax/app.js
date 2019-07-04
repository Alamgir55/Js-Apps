const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post Two'}
];

function createPost(post){
    return new Promise(function(resolved, rejected){
        setTimeout(function(){
            posts.push(post);
            const error = true;
            if(!error){
                resolved();
            }else{
                rejected('Error: Something went wrong');
            }
        }, 2000);
    });
}
function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(error){
    console.log(error);
});