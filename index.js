//1st forEach array method
// foreach return every single array item

//const numbers = [1, 2, 3, 4, 5];

//numbers.forEach(number => console.log(number));

//2nd includes array method
// includes return TRUE/FALSE
const students = [1, 2, 3, 4, 5];

//console.log(students.includes(6));

//3rd filter array method
//filter method check a condition within array and return array
const peoples = [1, 2, 3, 4, 5];

const filterPeoples = peoples.filter((number) => number < 3 );
//console.log(filterPeoples);

// 4th map array method
// map check every single item and return a new array
const counts = [1, 2, 3, 4, 5];

const newCounts = counts.map(number => number + 1);
//console.log(newCounts)


//5th reduse array method
//
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce( (accumulator, number) => accumulator + number );
// console.log(sum);

//6th sum array method
//sum return true/false
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.some(number => number < 3));


//7th every array method
//check every item and need to pass condition, return true/false 
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.every(number => number < 3 ));


//8th sort array method
//sort array item in  acending or decending 
// const numbers = [1, 3, 4, 5, 2];

// const sortArray = numbers.sort((a, b) => a < b);
// console.log(sortArray);

//9th reverse array method
//simply reverse the array
// const numbers = [ 1, 2, 3, 4, 5 ];
// console.log(numbers.reverse());

//10th concat array method
// concat 2 array into one
const numbers = [ 1, 2, 3, 4, 5 ];
const numbers2 = [ 7,8,9 ];

const conCatArr = numbers.concat(numbers2);
console.log(conCatArr);
