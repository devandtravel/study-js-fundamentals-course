const numbers = [1, 2, 3, 4, 5]
console.log('whole array', numbers)
console.log('first element', numbers[0])

// mutate the first element of the array
numbers[0] = 0

console.log('changed first element', numbers[0])
console.log('array length', numbers.length)
console.log('last element', numbers[numbers.length - 1])

const strings = ['1', '2', '3', '4', '5']
// strings = ['6', '7', '8', '9', '10'] // we can't mutate the const array
strings[0] = '0' // but we can mutate elements
strings[5] = '6' // and we can add elements
// strings[10] = '11' // even out of order, so we get <4 empty items> (don't do this')
console.log(strings)

// push and pop methods
strings.push('pushed item')
strings.push('pushed item 2 to be removed by pop() method')
console.log(strings.pop()) // remove and return the last element
console.log('Changed array', strings)
