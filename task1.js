// Расширьте функцию так, чтобы при одинаковом наборе аргументов, но при различном порядке их следования результат все равно был одиноковым.

// Например: memoize(sum(2, -4, 5)) работало также, как и memoize(sum(-4, 2, 5))

function memoize(callback) {
  const cache = {};

  return function (...args) {
    let sortedArgs = args.sort((a, b) => a - b);

    const key = JSON.stringify(sortedArgs);
    console.log(key);
    console.log("cache before ", cache);

    if (cache[`${key}`] !== undefined) {
      console.log("Get from cache");
      return cache[`${key}`];
    }

    console.log("First calculation");
    const result = callback(...args);
    cache[`${key}`] = result;
    console.log("cache after ", cache);

    return result;
  };
}

function sum(...args) {
  return args.reduce((acc, item) => acc + item);
}

let sumWithCache = memoize(sum);

console.log(sumWithCache(1, 3, 4));

console.log(sumWithCache(3, 4, 3));

console.log(sumWithCache(4, 3, 1));

console.log(sumWithCache(0, 1, 0));

console.log(sumWithCache(3, 3, 4));
