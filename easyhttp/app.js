const http = new easyHTTP;

// Get Posts

/* http.get('https://jsonplaceholder.typicode.com/posts', function(error, posts){
    if(error){
        console.log(error);
    }else{
        console.log(posts);
    }    
}); */

// Get Post

/* http.get('https://jsonplaceholder.typicode.com/posts/1', function(error, post){
    if(error){
        console.log(error);
    }else{
        console.log(post);
    }
}); */

// POST
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};
/* http.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post){
    if(error){
        console.log(error);
    }else{
        console.log(post);
    }
}); */
// Put
/* http.put('https://jsonplaceholder.typicode.com/posts/10', data, function(erro, post){
    if(erro){
        console.log(erro);
    }else{
        console.log(post);
    }
}); */
// Detete
http.delete('https://jsonplaceholder.typicode.com/posts/10', function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
});