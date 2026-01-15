// var name = "rizwan";

// if (name === "rizwan") {
//   alert("Perfect")
// }

// var age = 18;

// if(age >= 20) {
//   alert("thank you");
// } else {
//   alert("you are underAge");
// }

// let marks = 60;

// if(marks <= 90) {
//   alert("Grade A");
// } else if (marks <= 80) {
//   alert("Grade B");
// } else if (marks <= 70){
//   alert("Grade C");
// }else {
//   alert('Fail');
// }

// let name = prompt("Enter Your User Name");
// let password = prompt("Enter Your User Password");

// if (name === "admin" && password === "12345"){
//   alert("Login Successful");
// }else (
//   alert ("Login Wrong")
// )

// AND
// let userName = prompt("Enter Your User Name", "admin");
// let userPassword = prompt("Enter Your User Password", "12345");

// if (userName === "admin" && userPassword === "12345"){
//   alert("Login Successful");
// }else (
//   alert ("Login Wrong")
// )


// OR
// let userName = prompt("Enter Your User Name", "admin");
// let userPassword = prompt("Enter Your User Password", "12345");

// if (userName === "admin" || userPassword === "12345"){
//   alert("Login Successful");
// }else (
//   alert ("Login Wrong")
// )

let city = "Karachi";

if (city == "Karachi") {
  alert("Welcome to Karachi");
} else {
  alert("Other City");
}

let age = 15;

if (age != 18) {
  alert("Age is not 18");
} else {
  alert("Age is 18");
}

let user = "rizwan";
let password = "12345";

if (user != "") {

  if (password != "") {
    alert("Fields are filled");
  } else {
    alert("Password is empty");
  }

} else {
  alert("Username is empty");
}

let loginType = "google"; 

if (loginType == "google" || loginType == "facebook") {

  if (loginType != "guest") {
    alert("Login Allowed");
  }

} else {
  alert("Invalid Login");
}


// let userName = prompt("Enter User Name");
// let password = prompt("Enter Password");

// if (userName === "admin") {
//   if (password === "12345") {
//     alert("Login Successful");
//   } else {
//     alert("Wrong Password");
//   }

// } else {
//   alert("User Not Found");
// }


let marks = 78;

if (marks >= 50) {
  if (marks >= 80) {
    alert("Grade A");
  } else if (marks >= 70) {
    alert("Grade B");
  } else if (marks >= 60) {
    alert("Grade C");
  } else {
    alert("Pass");
  }

} else {
  alert("Fail");
}


// let age = 22;
// let hasCNIC = true;

// if (age >= 18) {
//   if (hasCNIC === true) {
//     alert("You are eligible");
//   } else {
//     alert("CNIC required");
//   }

// } else {
//   alert("Under Age");
// }


let totalAmount = 6000;
let isMember = true;

if (totalAmount >= 3000) {

  if (isMember === true) {
    alert("You got 20% Discount");
  } else {
    alert("You got 10% Discount");
  }

} else {
  alert("No Discount");
}
