const str = 'Hello world!'

console.log(str.toLowerCase()) //hello world!
console.log(str.toUpperCase()) // HELLO WORLD!
console.log(str.includes('world')) // true
console.log(str.indexOf('world')) // 6

console.log(str.toLowerCase().includes('hello')) // true

console.log(str.slice(0, 5)) // Hello
console.log(str.slice(6, 9)) // wor
console.log(str.slice(6)) // world!

console.log(str.split(' ')) // [ 'Hello', 'world!' ]
console.log(str.split(' ').join('|')) // Hello|world!