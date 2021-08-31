const regex1 = /\w+/
const regex2 = new RegExp('\\w+')

const str = 'JavaScript is cool language. Everybody should learn JavaScript'

// test
console.log(/javascript/i.test(str)) // true

console.log(str.replace(/javascript/gi, 'php')) // php is cool language. Everybody should learn php
console.log(str.match(/javascript/gi)) // [ 'JavaScript', 'JavaScript' ]
