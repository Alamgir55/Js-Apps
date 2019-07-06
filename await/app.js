function http(url, method){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let data = 'the answer';
            if(data){
                resolve(data);
            }else{
                reject('No data');
            }
        }, 1000);
    });
    return promise;
}

// http('http://google.com', 'GET').then( (data)=>{
//     return data.toUpperCase();
// }).then((data)=>console.log(data))
//     .catch( (err)=>{
//     console.log(err)
// });
/* async function init(http){
    const http = await http('http://google.com', 'GET');
    return http;
}
init(); */
async function init(){
    
    try{
        const https = await http('http://google.com', 'GET');
        const data2 = await https.toUpperCase();
        console.log(data2);
    }catch(e){
        console.log(e);
    }        
}
init();