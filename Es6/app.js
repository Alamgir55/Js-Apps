// function NameIterator(names){
//     let nameIndex = 0;

//     return {
//         alex: function(){
//             return nameIndex < names.length ?
//             {value: names[nameIndex++], done: false} :
//             {done: true }
//         }
//     }
// }

// const nameArr = ['jack', 'kon', 'jocker'];
// const names = NameIterator(nameArr);
// console.log(names.alex().value);
// console.log(names.alex().value);
// console.log(names.alex().value); 

// function* sayName(){
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }
// const name = sayName();
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

function* createIds(){
    let id = 1;
    while(true){
        yield id++;
    }
}
const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);