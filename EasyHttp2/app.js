const http = new EasyHTTP;

/* http.get('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data))
    .catch(erro => console.log(erro)); */

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'alamgir55hossain@gmail.com'
}

/* http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err)); */
    // http.put('https://jsonplaceholder.typicode.com/users/1', data)
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));
    http.delete('https://jsonplaceholder.typicode.com/users/1')
        .then(data => console.log(data))
        .catch(error => console.log(error));        