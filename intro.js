//example from Day 1

const fullName = "Danielle Kom";
console.log(`My name is ${fullName}`);

//always save command s before seeing in terminal etc
console.log("Hello World");

console.log(2 != "2");
//doesnt show anything in terminal why?

//let a = 20
//let b = 40
//console.log (a > 10 && b > 10)
//doesnt show anything in terminal why?
// bc u have to save first and in terminal do node into.js enter
// danielle == 'danielle' is true but danielle === 'danielle is false
// danielle =! samantha true danielle =! danielle false

// if/else
animal = "dog";
if (animal === "dog") {
  console.log("woof");
} else {
  console.log("meow");
}

let hour = 10;
if (hour < 11) {
  console.log("Good morning!");
} else if (hour < 17) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

//ternary short for if and useful for variable conditioning
// if hour is <11 then it becomes good morning if not it becomes good afternoon
// the ? is asking the statement whether its gm or good afternoon
let message = hour < 11 ? "Good morning!" : "Good afternoon!";

// ternary can be combined with template literals
// let str = `How are you doing${(firstName)} ? ` , ${firstName}` :"}?`
// i do not understand line 45

//switch: tries to match an expression to a case default means else break is to complete the task at hand
let fruit = "peach";

switch (fruit) {
  case "orange":
    console.log("oranges are $0.59 a pound");
    break;
  case "apple":
    console.log("Apples are $0.32 a pound.");
    break;
  case "banana":
    console.log("bananas are $0.48 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}

//practice w darie

let a = 40;
let b = 20;

if (a > 10 && b > 10) {
  console.log("a and b are greater than 10");
}

if (a > 60 && b > 60) {
  console.log("a and b are greater than 60");
}
if (a > 60 || b < 60) {
  console.log(" a is less than 60");
}

// let hour = 10
let msg = hour < 11 ? "Good Morning" : "Good afternoon";

console.log(msg);

switch (fruit) {
  case "apple":
    console.log("Yummy apples");
    break;

  case "kiwi":
    console.log("Yummy Kiwis");
    break;

  default:
    console.log("aint nobody got time for that");
    break;
}

//gonna write a function to establish if someone is of drinking age

function isDrinkingAge(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

console.log(`Can Darie drink ${isDrinkingAge(32)}`);
