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

// function* createIds(){
//     let id = 1;
//     while(true){
//         yield id++;
//     }
// }
// const gen = createIds();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(Symbol()===Symbol());

// const KEY1 = Symbol();
// const KEY2 = Symbol('sym2');

// const myObj = {};

// myObj[KEY1] = 'Prop1';
// myObj[KEY2] = 'Prop2';
// myObj.key3 = 'Prop3';
// myObj.key4 = 'Prop4';

// //console.log(myObj);
// for(let i in myObj){
//     console.log(`${i}: ${myObj[i]}`);
// }

// let a, b;
// [a, b] = [100, 200];
// [a, b, c, ...rest] = [500, 300, 20, 10, 42];
// //console.log(rest);

// ({a, b, ...rest} = {a:100, b:500, c:400, d:800});

//console.log(rest);

// const people = ['alex', 'raynx', 'rakio'];
// const [person1, person2, person3] = people;
// console.log(person1,person2,person3);

// function getPeople(){
//     return ['alex', 'raynx', 'rakib'];
// }
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);

// const me = {
//     name: 'alex raynx',
//     age: 'something',
//     passinate: 'Programming',
//     sayHello: function(){
//         console.log('...Hello');
//     }
// };
// const {name, age, passinate, sayHello } = me;

// console.log(name, age, passinate);
// sayHello();

// const map1 = new Map();

// const key1 = 'SOme String',
//       key2 = {},
//       key3 = function(){};

// map1.set(key1, 'Another valu1');
// map1.set(key2, 'Another valu2');
// map1.set(key3, 'Another valu3');

// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// console.log(map1.size);

// for(let [key, value] of map1){
//     console.log(`${key} = ${value}`);
// }

// for(let key of map1.keys()){
//     console.log(key);
// }

// for(let value of map1.values()){
//     console.log(value);
// }
// map1.forEach(function(key, value){
//     console.log(`${key} = ${value}`);
// });
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// const valArray = Array.from(map1.keys());
// console.log(valArray);

// const set1 = new Set();
// set1.add(100);
// set1.add('A String');
// set1.add({name: 'John'});
// set1.add(true);
// set1.add(110);
// set1.add(100);

// const set2 = new Set([1, true, 'String']);

// // console.log(set1.size);
// // console.log(set1.has(100));
// set1.delete(100);
// //console.log(set1);
// // for(let item of set1){
// //     console.log(item);
// // }
// const setArr = Array(set1);
// console.log(setArr);

const companies = [
    {name: "Company One", category: 'Finance', start: 1981, end: 2003},
    {name: "Company Two", category: 'Retail', start: 1992, end: 2008},
    {name: "Company Three", category: 'Auto', start: 1999, end: 2007},
    {name: "Company Four", category: 'Retail', start: 1989, end: 2010},
    {name: "Company Five", category: 'Finance', start: 1987, end: 2015},
    {name: "Company Six", category: 'Technology', start: 1986, end: 2016}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
// }

// companies.forEach(function(comp){
//     console.log(comp.name);
// });
// let canDrink = [];

// for(let i = 0; i <= ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }
// });
//console.log(canDrink);

const retailCompanies = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true;
    }
});
console.log(retailCompanies);