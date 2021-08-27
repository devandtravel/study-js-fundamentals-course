// >, <, ==, !=, !==, >=, <=, >==, <=, ===
console.log('is 5 > 2', 5 > 2) // true
console.log('is 5 < 2', 5 > 2) // false

console.log('is equal 5 and 5', 5 == 5) // true
console.log('is equal 5 and 4', 5 == 4) // false

console.log('is equal 5 and "5"', 5 == '5') // true, comparison with type fitting
console.log('is equal 5 and "5"', 5 === '5') // false
console.log('is not equal 5 and "5"', 5 != '5') // false, comparison with type fitting
console.log('is not equal 5 and "5"', 5 !== '5') // true

// complex logic
// AND: &&, OR: ||
console.log(1 === 1 && 2 === 2) // true
console.log(1 === 1 && 2 === '2') // false
console.log(1 === '1' && 2 === 2) // false

console.log(1 === 1 || 2 === 2) // true
console.log(1 === 1 || 2 === '2') // true
console.log(1 === '1' || 2 === '2') // false

// priority: first && then ||
console.log(1 === 2 || (2 === 3 && 4 === 4)) // false
