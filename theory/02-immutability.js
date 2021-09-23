const arr = [1, 2, 3, 4, 5]
const newArr = arr.slice(0, 4) // 1, 2, 3, 4
const newArr2 = [0, ...arr] // 0, 1, 2, 3, 4, 5

const obj = { a: 1, b: 2, c: 3 }
const obj2 = { ...obj, a: 10, d: 4 }
