// Выборка чисел из массива по условию
// Обойдите циклом массив чисел numbers и сохраните в новый массив evenNumbers первые три четных числа из оригинального массива.
// Предусмотрите выход из цикла, когда в массиве evenNumbers уже есть три значения.

const numbers = [1, 2, 2, 13, 11, 7, 18, 20, 22, 14, 15]
const evenNumbers = []
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 !== 0) continue
  evenNumbers.push(numbers[index])
  if (evenNumbers.length === 3) break
}