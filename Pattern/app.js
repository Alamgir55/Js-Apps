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

// function MemberFactory(){
//     this.createMember = function(name, type){
//         let member;
//         if(type === 'simple'){
//             member = new SimpleMembership(name);
//         } else if(type === 'standard'){
//             member = new StandardMembership(name);
//         }else if(type === 'super'){
//             member = new SuperMembership(name);
//         }
//         member.type = type;

//         member.define = function(){
//             console.log(`${this.name} (${this.type}): ${this.cost}`);
//         }
//         return member;
//     }
// }

// const SimpleMembership = function(name){
//     this.name = name;
//     this.cost = '$5';
// }
// const StandardMembership = function(name){
//     this.name = name;
//     this.cost = '$15';
// }
// const SuperMembership = function(name){
//     this.name = name;
//     this.cost = '$20';
// }

// const members = [];
// const factory = new MemberFactory();

// members.push(factory.createMember('John Doe', 'simple'));

// //console.log(members);

// members.forEach((member)=>{
//     member.define();
// });

// function factoryMember(){
//     this.createMember = function(name, type){
//         let member;
//         if(type === 'simple'){
//             member = new simpleMemberShip(name);
//         }else if(type === 'standar'){
//             member = new standarMemberShip(name);
//         }else if(type === 'super'){
//             member = new superMemberShip(name);
//         }
//         member.type = type;
//         member.define = function(){
//             console.log(`${this.name} (${this.type}) ${this.cost}`);
//         }
//         return member;
//     }
// }
// const simpleMemberShip = function(name){
//     this.name = name;
//     this.cost = '$5';
// }
// const standarMemberShip = function(name){
//     this.name = name;
//     this.cost = '$15';
// }
// const superMemberShip = function(name){
//     this.name = name;
//     this.cost = '$18';
// }

// const members = [];
// const factory = new factoryMember();

// members.push(factory.createMember('John Doe', 'super'));

// members.forEach(function(member){
//     member.define();
// });

// function EventObserver(){
//     this.observers = [];
// }
// EventObserver.prototype = {
//     subscribe: function(fn){
//         this.observers.push(fn);
//         console.log(`You are now subsribed to ${fn.name}`);
//     },
//     unsubscribe: function(fn){
//         this.observers = this.observers.filter(function(item){
//             if(item !== fn){
//                 return item;
//             }
//         });
//         console.log(`You are now unsubcribed from ${fn.name}`);
//     },
//     fire: function(){
//         this.observers.forEach(function(item){
//             item.call();
//         });
//     }
// }
// const click = new EventObserver();

// document.querySelector('.sub-ms').addEventListener('click', function(){
//     click.subscribe(getCurMilliseconds);
// });

// document.querySelector('.unsub-ms').addEventListener('click', function(){
//     click.unsubscribe(getCurMilliseconds);
// });

// document.querySelector('.fire').addEventListener('click', function(){
//     click.fire();
// });

// const getCurMilliseconds = function(){
//     console.log(`Current Milliseonds: ${new Date().getMilliseconds()}`);
// }

// function EventObserver(){
//     this.observer = [];
// }
// EventObserver.prototype = {
//     subscribe: function(fn){
//         this.observer.push(fn);
//         console.log(`You have subscribe ${fn.name}`);
//     },
//     unsubscribe: function(fn){
//         this.observer = this.observer.filter(function(item){
//             if(item !== fn){
//                 return item
//             }
//         });
//         console.log(`You have unsubscribe ${fn.name}`);
//     },
//     fire: function(){
//         this.observer.forEach(function(item){
//             item.call();
//         });
//     }
// }

// class EventObserver {
//     constructor(){
//         this.observer = [];
//     }
//     subscribe(fn){
//         this.observer.push(fn);
//         console.log(`You have subscribe ${fn.name}`);
//     }
//     unsubscribe(fn){
//         this.observer = this.observer.filter(function(item){
//             if(item !== fn){
//                 return item
//             }
//         });
//         console.log(`You have unsubscribe ${fn.name}`);
//     }
//     fire(){
//         this.observer.forEach(function(item){
//             item.call();
//         });
//     }
// }

// const click = new EventObserver();

// document.querySelector('.sub-ms').addEventListener('click', function(){
//     click.subscribe(getCurMillisecends);
// });
// document.querySelector('.unsub-ms').addEventListener('click', function(){
//     click.unsubscribe(getCurMillisecends);
// });
// document.querySelector('.fire').addEventListener('click', function(){
//     click.fire();
// });
// const getCurMillisecends = function(){
//     console.log(`Current MilliSeconds: ${new Date().getMilliseconds()}`);
// }ss
ss