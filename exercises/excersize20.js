// Практика на замыкание
// Создайте функцию addByX. Которая принимает 1 параметр (число) и возвращает новую функцию, которая также принимает число и возвращает его сумму с исходным параметром.

// Примеры использования:

// const addByTwo = addByX(2);
// addByTwo(3); // 5
// addByTwo(5); // 7

// const addByFour = addByX(4);
// addByFour(3); // 7
// addByFour(5); // 9

function addByX(x) {
  function addNum(num) {
    return num + x
  }
  return addNum
}
