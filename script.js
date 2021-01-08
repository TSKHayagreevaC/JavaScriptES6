// console commands from mdn docs 

// console.assert();
// console.count();
// console.countReset();
// console.debug();
// console.dir();
// console.dirxml();
// console.error();
// console.exception();  
// console.group();
// console.groupCollapsed();
// console.groupEnd();
// console.info();
// console.log();
// console.profile();
// console.profileEnd(); 
// console.table();
// console.time();
// console.timeEnd();
// console.timeLog();
// console.timeStamp(); 
// console.trace();
// console.warn();
// console.clear();


// ES6 variables
// const name = 'srikanth';
// const age = 27;
// const hello = `my name is ${name} and I am ${age}`;
// console.log(hello);

// Arrays display
// const a = 'rama, is, a, good, human, being, and, with, divine, attributes';
// console.log(a.split(','));
// const b = 'rama is a good human being and with divine attributes';
// console.log(b.split(''));

// Array decleration
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// Array Operations
// const Games = ['Cricket', 'Hockey', 'Chess', 'FootBall', 'Chess'];
// console.log(Games);
// console.log(Games[0]);
// Games.push('Shooting');
// console.log(Games);
// Games.unshift('Running');
// console.log(Games);
// Games.pop('Running');
// console.log(Games);
// console.log(Array.isArray(Games));
// console.log(Games.indexOf('Running'));

// Object Literals a new feature from the Es6
// const info = {
//     firstName: 'Srikanth',
//     lastName: 'Hayagreena', 
//     age: 27, 
//     activities: ['Reading', 'Learning', 'Coding'],
//     address: {
//         flatNo: 34343,
//         appartmentName: 'asdfasdf',
//         streetName: 'ghghghgh',
//         city: 'so&so', 
//         state: 'solidState', 
//         nation: 'concatination'
//     }
// }
// console.log(info.firstName);
// console.log(info.address.state);
// console.log(info.address);
// info.email = 'blablabla@gmail.com';
// console.log(info);


// Array Of Objects & JSON conversion
// const States = [
//     {
//         id: 1,
//         name: 'ice',
//         state: 'solidState',
//         isCompleated: true
//     },
//     {
//         id: 2,
//         name: 'water',
//         state: 'liquidState',
//         isCompleated: true
//     },
//     {
//         id: 3,
//         name: 'vapour',
//         state: 'gasousState',
//         isCompleated: false
//     }
// ];
// console.log(States);
// const statesJSON = JSON.stringify(States);
// console.log(statesJSON);

// Loops for loop and while loop
// for(let i=0; i<10; i++) {
//     console.log(`Welcome to for loop numbering: ${i}`);
// }

// let i=0;
// while(i<10) {
//     console.log(`While loop numbering is here: ${i}`);
//     i++;
// }

// Loop Through an Object
// const States = [
//     {
//         id: 1,
//         name: 'ice',
//         state: 'solidState',
//         isCompleated: true
//     },
//     {
//         id: 2,
//         name: 'water',
//         state: 'liquidState',
//         isCompleated: true
//     },
//     {
//         id: 3,
//         name: 'vapour',
//         state: 'gasousState',
//         isCompleated: false
//     }
// ];

// Basic Loop Through Methods

// for (let i=0; i< States.length; i++) {
//     console.log(States[i].name);
// }

// for (let state of States) {
//     console.log(state.name);
// }

// // Higher Order Methods to loop through an Object Literal
// There are three kinds of higher order functions 
// i. forEach();
// ii. map();
// iii. filter();

// States.forEach(function(state){
//     console.log(state.name);
// });

// const stateName = States.map(function(state){
//     return state.name;
// });
// console.log(stateName);

// const stateCompleated = States.filter(function(state) {
//     return state.isCompleated === true;
// });
// console.log(stateCompleated);

//Chain of Higher Order Methods
// const stateCompleated = States.filter(function(state) {
//     return state.isCompleated === true;
// }).map(function(state) {
//     return state.name
// });
// console.log(stateCompleated);

// //Single Consitionals of Java Script
// const x = 20;
// if (x === 10) {
//     console.log('x is 10');
// } else if (x > 10) {
//     console.log('x is greater than 10');
// } else {
//     console.log('x is not matching');
// }

// Multiple Conditionals of the Java Script
// const x = 6;
// const y = 10;
// if (x > 5 || y > 10) {
//     console.log("x is more than five and y is more than 10");
// }

// Ternary Operators or Conditionals
//  const x = 20;
//  const color = x > 10 ? 'red' : 'blue';
//  console.log(color); 

// Switches
// const x = 1;
// // const color = x > 10 ? 'red' : 'blue';
// const color = 'green';
// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default: console.log('color is NOT red or blue');
//     break;
// }