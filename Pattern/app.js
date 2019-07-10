// (function(){
//     // private

//     return {
//         // public

//     }
// })(//run);

// const UICrl = (function(){
//     const text = 'Hello Word JS';

//     const contentText = function(){
//         const element = document.querySelector('h1');
//         element.innerHTML = text;
//     }
//     return {
//         changeText: function(){
//             contentText();
//             console.log(text);
//         }
//     }
// })();

// UICrl.changeText();

// console.log(UICrl.text);
// const ItemCrl = (function(){
//     let data = [];

//     function add(item){
//         data.push(item);
//         console.log('Item Added');
//     }
//     function get(id){
//         return data.find(item => {
//             return item.id === id;
//         });
//     }
//     return {
//         add: add,
//         get: get
//     }
// })();

// ItemCrl.add({id: 1, content: 'Alex'});
// console.log(ItemCrl.get(1));

// const singleton = (function(){
//     let instance;

//     function createInstance(){
//         objcet = new Object('String');
//         return objcet;
//     }
//     return {
//         getInstance: function(){
//             if(!instance){
//                 instance = createInstance();
//             }
//             return instance;
//         }
//     }
// })();

// const i = singleton.getInstance();
// console.log(i);