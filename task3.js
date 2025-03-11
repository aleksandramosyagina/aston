// Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило некоторое значение свойства item того объекта
// (Привязать через bind, call, apply)

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

console.log(logger.call(obj));
console.log(logger.apply(obj));

let newLogger = logger.bind(obj);

newLogger();
