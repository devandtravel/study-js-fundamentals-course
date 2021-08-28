// +, -, *, **, /, %
let n
n = 0
n = -1
n = +1
n = -0
n = +0
n = +'2' // 2
n = +'2 sad' // NaN

// concatenation
const s1 = 'Hello '
const s2 = 'world'
const s = s1 + s2 // Hello, world

// implicit type conversion
const a1 = 2 + '2' // '22'

// increment, decrement
let x = 1

// ++, --
// x++ === (x = x + 1)
// ++x === (x = x + 1)
console.log(x++) // returns 1, x === 2
console.log(x) // returns 2, x === 2
x = 1
console.log(++x) // returns 2, x === 2

// x-- === (x = x - 1)
// --x === (x = x - 1)
x = 1
console.log(x--) // returns 1, x === 0
console.log(x) // returns 0, x === 0
x = 1
console.log(--x) // returns 0, x === 0

x = 1
// +=, -=, *=, /=, %=
// (x+= 2) === (x = x + 2)
// (x-= 2) === (x = x - 2)
// (x*= 2) === (x = x * 2)
// and so on
