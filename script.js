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

// Chain of Higher Order Methods
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
//        console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default: console.log('color is NOT red or blue');
//     break;
//}

// Java Script functions
// function addNum(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNum(5,5));

// function addNums(a = 1, b = 2) {
//     return a + b;
// }
// console.log(addNums(5,6));

// const sum = (x =1 , y = 1) => {return x + y}
// console.log(sum(8, 9));

// Arrow functions adn loop through an object oriented literal
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

    // States.forEach((state) => console.log(state.name));


    // Object Oriented Programming

// Constructor function
// function Human(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Instantiate Object
// const human1 = new Human('Sri', 'Kanth', '1-1-1993');
// const human2 = new Human('Sri', 'Nath', '1-1-1994');
// console.log(human1);
// console.log(human2);
// console.log(human1.getBirthYear());
// console.log(human2.getFullName());

//  Functions With Prototypes
// function Human(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     Human.prototype.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     Human.prototype.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const human1 = new Human('Sri', 'Ram', '1-1-1995');
// const human2 = new Human('Sri', 'Krishna', '1-1-1996');

// console.log(human1);
// console.log(human2);
// console.log(human1.getFullName);
// console.log(human2.getBirthYear);

//Class 
// class Man {
//     constructor(firstName, lastName,pob, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.placeOfBirth = pob;
//         this.dob = new Date(dob);
//     }

//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullYear() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const man1 = new Man('Sri', 'Rajesh', 'Hyderabad', '1-1-1997');
// const man2 = new Man('Sri', 'Somesh', 'Delhi', '1-1-1998');

// console.log(man1);
// console.log(man2);
// console.log(man1.getFullName);
// console.log(man2.getBirthYear);

// Document Object Model

// console.log(window);
// window.alert(2);

// Single Element Selectors

// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.getElementById('my-form'));

// console.log(document.querySelector('h1'));

// console.log(document.querySelector('#my-form'));

// console.log(document.querySelector('.container'));


// Multiple Element Selectors

// console.log(document.getElementsByClassName('item'));

// console.log(document.getElementsByTagName('li'));

// console.log(document.querySelectorAll('.item'));

// Array Selectors

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// Manipulations using DOM

// const ul = document.querySelector('.items');

// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Rakesh';
// ul.children[1].innerText = 'Ramesh';
// ul.lastElementChild.innerHTML = '<h3>Rajesh</h3>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'skyblue';

//Document Object Model and Events

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (event) => {
//     event.preventDefault();
    // console.log(event);
    // console.log(event.target.className);

    // document.querySelector('#my-form')
    //  .style.background = '#ccc';
    
    // document.querySelector('body').classList
    //  .add('bg-dark');

    //  document.querySelector('.over').innerText = 'Successfully Registered';
// });

//Add Users To The Web Page

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', (event) => {
     event.preventDefault();
    //  console.log(nameInput.value, emailInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields';
        setTimeout(() => msg.remove(), 3000);
        // alert ('Please Enter Fields');
    } else {
        // console.log('success');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));
    
        userList.appendChild(li);

        // Clear Fields
        nameInput.value = '';
        emailInput.value = '';

        document.querySelector('.over').innerText = 'Successfully Registered';
    }
 });