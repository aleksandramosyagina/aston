// Реализовать полифил(собственную функцию реализующую встроенную в js) метода bind().

let obj = {
  name: "Harry",
};

let newFunc = function (surname, city) {
  console.log(`${this.name} ${surname} ${city}`);
};

Function.prototype.customBind = function (obj, ...args) {
  let func = this;

  return function (...newArgs) {
    func.apply(obj, [...args, ...newArgs]);
  };
};

let bindFunc = newFunc.customBind(obj, "Potter");

bindFunc("London");
