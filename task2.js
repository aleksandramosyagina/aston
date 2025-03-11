// Написать каррированную функцию add(a)(b)(c)...(n), которая может работать с произвольным числом аргументов в виде такой цепочки

function add(a) {
  let sum = a;

  const accum = function (b) {
    if (typeof b === "number") {
      sum += b;
      return accum;
    }
    return sum;
  };

  return accum;
}

console.log(add(2)(3)(4)(5)());
console.log(add(4)(3)());
console.log(add(1)(1)(1)());
