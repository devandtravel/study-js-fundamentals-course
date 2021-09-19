// Практика по созданию функций высшего порядка
// Создайте функции-колбэки isOdd и isEven.  Обе принимают число, и возвращают true, соответственно, isOdd если переданное число нечетной, а isEven - когда число четное. В противном случае функции возвращают false.
// Вызовите функцию filterArray два раза. Первый раз, передав ему массив numbers и колбэк isOdd. Второй раз - массив numbers и колбэк isEven.

function filterArray(array, callback) {
  const newArray = []
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i])
  }
  return newArray
}
const numbers = [1, 2, 3, 4, 5]

function isOdd(num) {
  if (num % 2 !== 0) {
    return true
  }
  return false
}
function isEven(num) {
  if (num % 2 === 0) {
    return true
  }
  return false
}

// Для проверки используйте логи (раскомментируйте их после написания функций)
console.log(filterArray(numbers, isEven)) // Должен вывести: [2, 4]
console.log(filterArray(numbers, isOdd)) // Должен вывести: [1, 3, 5]
