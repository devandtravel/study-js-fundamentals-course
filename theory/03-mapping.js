const numbers = [1, 2, 3, 4, 5]

function print(el) {
  console.log(el)
}
numbers.forEach(print)

const result = numbers.map(el => el * 2)
console.log(result)
