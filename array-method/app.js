// Array Methods

let fruits = ["Banana", "Orange", "Apple", "Mango"];

// .push()      ==>      ||=>||     Array k end mein element add krta hai
// .pop()       ==>      ||=>||     Array k end se 1 ya element remove krta hai
// .unshift()   ==>      ||=>||     Array k start mein element add krta hai
// .shift()     ==>      ||=>||     Array k start se element remove krta hai
// .splice()    ==>      ||=>||     Array mein se element add ya remove krta hai
// .slice()     ==>      ||=>||     Array ki copy banata hai array ko change kiye bagair

// fruits.push("Pineapple");
// console.log(fruits); || ["Banana", "Orange", "Apple", "Mango", "Pineapple"]

// fruits.pop();
// console.log(fruits); || ["Banana", "Orange", "Apple", "Mango"]

// fruits.unshift("Pineapple");
// console.log(fruits); || ["Pineapple", "Banana", "Orange", "Apple", "Mango"]

// fruits.shift();
// console.log(fruits); || ["Orange", "Apple", "Mango"]

// fruits.splice(2, 0, "Pineapple", "Kiwi"); // index 2 se 0 elements remove krke Pineapple aur Kiwi add krdo
// console.log(fruits); || ["Banana", "Orange", "Pineapple", "Kiwi", "Apple", "Mango"]

// let citrus = fruits.slice(1, 3); // pehle 1 se 3 tak (3 exclude) elements ki copy bna lega
// console.log(citrus); // ["Orange", "Apple"]


// Push Method Example
let vegetables = ["Carrot", "Potato", "Cabbage", "Onion"]; // Initial array
vegetables.push("Lettuce"); // Add krdo "Lettuce" array k end mein
console.log(vegetables) // Answer: ["Carrot", "Potato", "Cabbage", "Onion", "Lettuce"]

// Pop Method Example
let numbers = [1, 2, 3, 4, 5]; // Initial array
numbers.pop(); // Remove krdo last element ko
console.log(numbers); // Answer: [1, 2, 3, 4]

// Unshift Method Example
let colors = ["Red", "Green", "Blue"]; // Initial array
colors.unshift("Yellow"); // Add krdo "Yellow" array k start mein
console.log(colors); // Answer: ["Yellow", "Red", "Green", "Blue"]

// Shift Method Example
let animals = ["Dog", "Cat", "Elephant"]; // Initial array
animals.shift(); // Remove krdo first element ko
console.log(animals); // Answer: ["Cat", "Elephant"]

// Splice Method Example
let letters = ["A", "B", "C", "D", "E"]; // Initial array
letters.splice(5, 0, "X", "Y"); // index 5 se 0 element remove krdo aur "X", "Y" add krdo
console.log(letters); // Answer: ["A", "B", "X", "Y", "D", "E"]

// Slice Method Example
let subjects = ["Math", "Science", "History", "Geography"]; // Initial array
let selectedSubjects = subjects.slice(1, 3); // 1 se 3 tak (3 exclude) elements ki copy bna lo
console.log(selectedSubjects); // Answer: ["Science", "History"]