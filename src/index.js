/* ДЗ 1 - Функции */

/*
 Задание 1:

 1.1: Добавьте к функции параметр с любым именем
 1.2: Функция должна возвращать аргумент, переданный ей в качестве параметра

 Пример:
   returnFirstArgument(10) вернет 10
   returnFirstArgument('привет') вернет `привет`

 Другими словами: функция должна возвращать в неизменном виде то, что поступает ей на вход
 */
function returnFirstArgument(f_arg) {
    return f_arg;
  }
  
  var q = returnFirstArgument('hello');
  console.log(q); 
  
  /*
   Задание 2:
  
   2.1: Функция должна возвращать сумму переданных аргументов
  
   Пример:
     sumWithDefaults(10, 20) вернет 30
     sumWithDefaults(2, 4) вернет 6
  
   2.1 *: Значение по умолчанию для второго аргумента должно быть равно 100
  
   Пример:
     sumWithDefaults(10) вернет 110
   */
  function sumWithDefaults(a) {
    const b = 100;
    return a + b;
  }
  
  var r = sum(8);
  console.log(r); //выведет 108
  
  
  /*
   Задание 3:
  
   Функция должна принимать другую функцию и возвращать результат вызова этой функции
  
   Пример:
     returnFnResult(() => 'привет') вернет 'привет'
   */
  function returnFnResult(fn) {
  
    function returnFnResul1(fn1){
      fn1 = 'task 3';
      return fn1;
    }
  
    return returnFnResul1();
  }
  
  console.log(returnFnResult()); ///выведет 'task 3'
  
  /*
   Задание 4:
  
   Функция должна принимать число и возвращать новую функцию (F)
   При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F
  
   Пример:
     var f = returnCounter(10);
  
     console.log(f()); // выведет 11
     console.log(f()); // выведет 12
     console.log(f()); // выведет 13
   */
  function returnCounter(number) {
    return function newFunc(){
                number++;
                return number;
    }
  };
  var f = returnCounter(3);
  console.log(f());
  console.log(f());
  console.log(f());
  
  
  /********эти две задачки разобрали на вебинаре практики, но все таки решила прописать их решение */
  /*
   Задание 5 *:
  
   Функция должна возвращать все переданные ей аргументы в виде массива
   Количество переданных аргументов заранее неизвестно
  
   Пример:
     returnArgumentsArray(1, 2, 3) вернет [1, 2, 3]
   */
  function returnArgumentsArray(...args) {
    console.log(args);
  }
  
  returnArgumentsArray(2,3,4,5);
  
  /*
   Задание 6 *:
  
   Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
   Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
  
   Пример:
     function sum(a, b) {
       return a + b;
     }
  
     var newSum = bindFunction(sum, 2, 4);
  
     console.log(newSum()) выведет 6
   */
  function bindFunction(fn) {
  
    let result = 0;
    for(let i = 0; i < fn.length; i++){
      result += fn[i];
    }
    return result;
  }
  
  console.log(bindFunction([1,1,1,9]));
  
  export {
      returnFirstArgument,
      sumWithDefaults,
      returnArgumentsArray,
      returnFnResult,
      returnCounter,
      bindFunction
  }
  