// nested loop

let firstName = ["Rizwan", "zesshan", "ebad", "habib"];
let lastName = ["khan", "Zzzz", "Aaaaa", "Bbbbb"];

for(let i = 0; i < firstName.length; i++){
  for(let j = 0; j < lastName.length; j++){
    console.log(firstName[i], lastName[j]);
  }
}