// 2. Создать функцию selectFromInterval (arr, a, b) {...}
// принимает 3 параметра: arr, a, b
// arr - массив чисел
// a, b - целые числа

// Функция должна вернуть новый массив, который включает в себя элементы массива arr вошедшие в интервал (включительно) между  a и b (или  b и a, в зависимости от того, что больше a или b). Возвращаемый массив должен быть отсортирован по возрастанию.

// если arr - не массив, то кидаем ошибку "first parameter must be an array!";
// если arr не полностью состоит из чисел (есть другие типы),  то кидаем ошибку "There are not only numbers in the array!";
// если a и/или b не целое число, то кидаем ошибку "incorrect input parameters!".

function selectFromInterval(arr, a, b) {
  if (!Array.isArray(arr)) {
    throw new Error("first parameter must be an array!");
  }

  let noNumbers = arr.some((num) => typeof num !== "number");

  if (noNumbers) {
    throw new Error("There are not only numbers in the array!");
  }

  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("incorrect input parameters!");
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let newArr = arr
    .filter((num) => num >= min && num <= max)
    .sort((a, b) => a - b);

  return newArr;
}
console.log(selectFromInterval([1, 2, 3, 4, 6, 7, 9, 4, 5], 7, 1));
