// Variables
let learnername = "Piyush";
const learnerage = 20;

// Arrow Function
const checkEvenOdd = (n) => {
  return n % 2 === 0 ? "Even" : "Odd";
};

// Condition
console.log(checkEvenOdd(5));

// Loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Array + map
const A = ["React", "Node", "Mongo"];
A.map((skill) => console.log(skill));

// Object
const studentProfile = {
  name: "Piyush",
  age: 20,
  course: "MERN",
};

// Filter
const number = [10, 25, 30, 15];
const filtereed = number.filter((n) => n > 18);
console.log(filtereed);

// DOM
const changeText = () => {
  document.getElementById("btn").innerText = "Clicked!";
};

// Events
let count = 0;

const handleClick = () => {
  count++;
  console.log("Button clicked:", count);
};

// ES6 Features
const dev = { name: "Piyush", course: "MERN" };

// Destructuring
const { name, course } = dev;
console.log(name, course);

// Spread
const updatedDev = { ...dev, age: 20 };
console.log(updatedDev);

// OOP
class Learner {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  showDetails() {
    console.log(`${this.name} is learning ${this.course}`);
  }
}

const student1 = new Learner("Piyush", "MERN");
student1.showDetails();

// utils.js
export const greetUser = (name) => {
  return `Hello ${name}`;
};

import { greetUser } from "./utils";

console.log(greetUser("Piyush"));

// Promises
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 1000);
});

fetchData.then((res) => console.log(res));

// Async/Await
const getData = async () => {
  const result = await fetchData;
  console.log(result);
};

getData();

// Forms
const handleInput = (event) => {
  console.log("Input value:", event.target.value);
};