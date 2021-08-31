const numbers1 = [1, 2, 3, 4, 5, 6, 7]

// pop, push
// shift, unshift

console.log(numbers1.includes(4)) // true
console.log(numbers1.indexOf(2)) // 1
console.log(numbers1.indexOf(9)) // -1
console.log(numbers1.slice(0, 2)) // [1, 2] new arrays
const numbers2 = numbers1.concat([8, 9]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers1.join(', ')) // '1, 2, 3, 4, 5, 6, 7'
