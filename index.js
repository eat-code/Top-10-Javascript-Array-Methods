//1st forEach array method
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => console.log(number));

//2nd includes array method
const students = [1, 2, 3, 4, 5];

console.log(students.includes(6));

//3rd filter array method
const peoples = [1, 2, 3, 4, 5];

const filterPeoples = peoples.filter((number) => number < 3 );
console.log(filterPeoples);

// 4th map array method
const counts = [1, 2, 3, 4, 5];

const newCounts = counts.map(number => number + 1);
console.log(newCounts)