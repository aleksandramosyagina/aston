// 1) Написать функцию deepCopy для глубокого копирования объектов. В качестве ключей и значений объектов используются только сериализуемые данные (частные случаи с ключами функциями, Map, Set и т.д игнорируем).
// Ожидаемый результат:
// const ob = {a: 3, b: {c: 7}}

// function deepCopy (obj) {...}

// const obCopy = deepCopy(ob)
// obCopy.a = 10
// obCopy.b.c = 11

// console.log('ob: ', ob.a) // 3
// console.log('ob: ', ob.b.c) // 7
// console.log('obCopy: ', obCopy.a) // 10
// console.log('obCopy: ', obCopy.b.c) // 11

const ob = { a: 3, b: { c: 7 } };

const obCopy = deepCopy(ob);

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const cloneObj = {};
  for (let i in obj) {
    if (obj[i] instanceof Object) {
      cloneObj[i] = deepCopy(obj[i]);
      continue;
    }
    cloneObj[i] === obj[i];
  }
  return cloneObj;
}

deepCopy(ob);

obCopy.a = 10;
obCopy.b.c = 11;

console.log("ob: ", ob.a); // 3
console.log("ob: ", ob.b.c); // 7
console.log("obCopy: ", obCopy.a); // 10
console.log("obCopy: ", obCopy.b.c); // 11
