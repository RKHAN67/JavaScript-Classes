// Array

let names = ["Ali", "Ahmed", "Sara", "Zara"];
alert(names); // Answer: ["Ali", "Ahmed", "Sara", "Zara"]

let scores = [90, 85, 88, 92];
alert(scores); // Answer: [90, 85, 88, 92]

let mixedArray = ["Hello", 42, true, null];
alert(mixedArray); // Answer: ["Hello", 42, true, null] 

let emptyArray = [];
alert(emptyArray); // Answer: []    // Empty array    

let fruits = ["Banana", "Orange", "Apple", "Mango"];
alert(fruits[0]); // Answer: "Banana"   // First element
alert(fruits[2]); // Answer: "Apple"    // Third element

fruits[1] = "Grapes"; // Change second element
alert(fruits); // Answer: ["Banana", "Grapes", "Apple", "Mango"]

fruits[4] = "Pineapple"; // Add new element at index 4
alert(fruits); // Answer: ["Banana", "Grapes", "Apple", "Mango", "Pineapple"]

// New Basic Array Examples

// Numbers array
let numbers = [10, 20, 30, 40];
alert(numbers); // [10, 20, 30, 40]

// Boolean values array
let flags = [true, false, true];
alert(flags); // [true, false, true]

// Cities array
let cities = ["Karachi", "Lahore", "Islamabad"];
alert(cities); // ["Karachi", "Lahore", "Islamabad"]

// Accessing last element using index
alert(cities[2]); // "Islamabad"

// Updating first element
cities[0] = "Peshawar";
alert(cities); // ["Peshawar", "Lahore", "Islamabad"]

// Creating array with duplicate values
let colors = ["Red", "Blue", "Red"];
alert(colors); // ["Red", "Blue", "Red"]

// Array with undefined value
let data = [100, undefined, 300];
alert(data); // [100, undefined, 300]

// Adding value directly using index
let students = [];
students[0] = "Ali";
students[1] = "Ahmed";
alert(students); // ["Ali", "Ahmed"]

// Accessing non-existing index
alert(students[5]); // undefined
