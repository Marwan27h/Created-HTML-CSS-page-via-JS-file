/*
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
Example
is_prime(1)  /* false 
is_prime(2)  /* true  
is_prime(-1) /* false */

function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0) {
        return false;
      }
    }
    return num > 1
  }
  console.log(isPrime(9))
  //////////
  const shoppingCart = ['bananas', 'milk'];

// ! Function to be tested
function addToShoppingCart(ele) {
  shoppingCart.push(ele);
  if (shoppingCart.length > 3) {
    shoppingCart.shift();
  }
  const result = shoppingCart.join(', ');
  return `You bought ${result}!`;
}
console.log(addToShoppingCart())
console.log(addToShoppingCart("cola"))
console.log(addToShoppingCart("cola light"))
console.log(addToShoppingCart("pata"))
console.log(addToShoppingCart())
//////\\

const employeeRecords = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

// ! Function under test
function filterPrivateData(employeeRecords) {
  return employeeRecords.map(({ name, occupation, email }) => ({
    name,
    occupation,
    email,
  }));
}
console.log(filterPrivateData(employeeRecords))
////////
/*
Full description at: https://github.com/HackYourFuture/Homework/tree/main/1-JavaScript/Week3#exercise-1-you-are-amazing

1. Complete the function named `giveCompliment`as follows:

   - It should take a single parameter: `name`.
   - Its function body should include a variable that holds an array,
     `compliments`, initialized with 10 strings. Each string should be a
     compliment, like `"great"`, `"awesome"` and so on.
   - It should randomly select a compliment from the array.
   - It should return the string "You are `compliment`, `name`!", where
     `compliment` is a randomly selected compliment and `name` is the name that
     was passed as an argument to the function.

2. Call the function three times, giving each function call the same argument:
   your name.
   Use `console.log` each time to display the return value of the
   `giveCompliment` function to the console.
-----------------------------------------------------------------------------*/
function giveCompliment(name) {
  const compliments = [
    'Awesome',
    'Beautiful',
    'Lovely',
    'Kind',
    'Nice',
    'Cool',
    'Good',
    'Handsome',
    'Kind',
    'Friendly',
  ]

const randomSelect = compliments [Math.floor(Math.random() * compliments.length)]

 return `you are ${randomSelect} ${name}! `
 

}
console.log(giveCompliment('mariano'))
///
function calculateDogAge(number) {
  let dogAge = number * 7
  return ` you are ${dogAge} years old in doggie years`;

}

console.log(calculateDogAge(4)) 
//
const numKids = [1, 2, 3, 4, 5];

const partnerNames = ['Julia', 'Maria', 'Rowan', 'Sofia', 'Nur'];

const locations = ['Amsterdam', 'London', 'Dubai', 'Rotterdam', 'Berlin'];

const jobTitles = ['Developer', 'Engineer', 'Doctor', 'Nurse', 'Cleaner'];

function selectRandomly(array) {
const i = Math.floor(Math.random()*array.length);
}
function tellFortune(k , p , j ,l) {
  const numKids = selectRandomly(k)
  const partnerNames = selectRandomly(p)
  const locations = selectRandomly(j)
  const jobTitles = selectRandomly(l)
  return `You will be  ${jobTitles} in ${locations}, 
    married to ${partnerNames} with ${numKids} kids`
}
console.log(tellFortune(numKids, partnerNames, locations, jobTitles))
//
const shoppingCar = ['bananas', 'milk'];
function addToShoppingCar(ele) {
  shoppingCar.push(ele);
  if (shoppingCar.length > 3 ){
    shoppingCar.shift()
  }
  const result = shoppingCar.join(', ');
  return `You bought ${result}!`
   
}
console.log(addToShoppingCar("cola"))
console.log(addToShoppingCar("onion"))
console.log(addToShoppingCar("chocolate"))
console.log(addToShoppingCar("pizza"))

//////


//
let cartForParty= {
  cola : 10,
  coffe : 1.50,
  chcola : 20,
  pizza : 14,

}
function calculateTotalPrice(price) {
let sum = 0;
for (let key in cartForParty) {
  if(typeof cartForParty[key] === 'number'){
    sum += cartForParty[key];
  }
}
  return sum;
}
console.log(calculateTotalPrice())
///
const employeeRecords1 = [
  {
    name: 'John',
    occupation: 'developer',
    gender: 'M',
    email: 'john.doe@somewhere.net',
    salary: 50000,
  },
  {
    name: 'Jane',
    occupation: 'manager',
    gender: 'F',
    email: 'jane.eyre@somewhere.net',
    salary: 60000,
  },
];

// ! Function under test
function filterPrivateData(employeeRecords1) {
const filterPrivate = [];
for (const {name ,occupation, email} of employeeRecords){
const filterPrivate1 = {name ,occupation, email };
filterPrivate.push(filterPrivate1);
}
 return filterPrivate;
}
console.log(filterPrivateData());

