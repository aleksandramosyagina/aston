// 3. Дан массив объектов
// const arr = [
//     {name: 'Bob', age: '25'},
//     {name: 'Ann', age: '30'},
//     {name: 'Tom', age: '35'},
// ]

// // Написать функцию fn:
// const fn = () => {...}

// arr.forEach(fn('name')) // Bob, Ann, Tom
// arr.forEach(fn('age')) // 25, 30, 35

const arr = [
  { name: "Bob", age: "25" },
  { name: "Ann", age: "30" },
  { name: "Tom", age: "35" },
];

const fn = (key) => {
  return (element) => console.log(element[key]);
};

arr.forEach(fn("name")); // Bob, Ann, Tom
arr.forEach(fn("age")); // 25, 30, 35
