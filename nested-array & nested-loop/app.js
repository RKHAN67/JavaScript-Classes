// let arr = [
//   ["First Array First Item", "First Array Second Item", "First Array Third Item"],
//   ["Second Array First Item", "Second Array Second Item", "Second Array Third Item"],
//   ["Third Array First Item", "Third Array Second Item", "Third Array Third Item"]
// ] // nested array

// for(let i = 0; i < arr.length; i++){  // outer loop
//   for(let j = 0; j < arr[i].length; j++){  // inner loop
//     console.log(arr[i][j]); // access nested array items
//   } 
// }

// let firstName = [
//   ["Rizwan", "zesshan"],
//   ["ebad", "habib"]
// ]

// for (let i = 0; i < firstName.length; i++){
//   for (let j = 0; j < firstName[i].length; j++){
//     console.log(firstName[i][j]);
//   }
// }


// let numberArr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i=0; i < numberArr.length; i++){
//   for (let j=0; j < numberArr[i].length; j++){
//     console.log(numberArr[i][j]);
//   }
// }


let threeDimensionalArr = [
  [
    ["Array First Then First Child And First Item", "Array First Then First Child And Second Item", "Array First Then First Child And Third Item"],
    ["Array First Then Second Child And First Item", "Array First Then Second Child And Second Item", "Array First Then Second Child And Third Item"]
  ],
  [
    ["Array Second Then First Child And First Item", "Array Second Then First Child And Second Item", "Array Second Then First Child And Third Item"],
    ["Array Second Then Second Child And First Item", "Array Second Then Second Child And Second Item", "Array Second Then Second Child And Third Item"]
  ],
  [
    ["Array Third Then First Child And First Item", "Array Third Then First Child And Second Item", "Array Third Then First Child And Third Item"],
    ["Array Third Then Second Child And First Item", "Array Third Then Second Child And Second Item", "Array Third Then Second Child And Third Item"]
  ]
];

for (let i = 0; i < threeDimensionalArr.length; i++){
  for (let j = 0; j < threeDimensionalArr[i].length; j++){
    for (let k = 0; k < threeDimensionalArr[i][j].length; k++){
      console.log(threeDimensionalArr[i][j][k]);
    }
  }
}