const lineLength = 20

console.log('Hi from app.js')
console.log('-'.repeat(lineLength))

/* #region PRIMITIVE TYPES */
console.log('PRIMITIVE TYPES using typeof')
console.log('-'.repeat(lineLength))
console.log('typeof undefined ->', typeof undefined)
console.log('')
console.log('"null" displaying as an "object" type, but still "null"!')
console.log('typeof null ->', typeof null)
console.log('')
console.log('typeof true ->', typeof true)
console.log('')
console.log('typeof "" ->', typeof '')
console.log('')
console.log('typeof Symbol() ->', typeof Symbol())
console.log('')
console.log('typeof 0 ->', typeof 0)
console.log('')
console.log(
  '"NaN" displaying as a "number" type, and actually in a "number" type!'
)
console.log('typeof NaN ->', typeof NaN)
console.log('')
console.log('typeof BigInt(0) ->', typeof BigInt(0))
console.log('')
console.log('typeof {} ->', typeof {})
console.log('')
console.log(
  '"function" is displaying as "function" type, but function is an "object" type!'
)
console.log('typeof (() => {}) ->', typeof (() => {}))
console.log('-'.repeat(lineLength))
/* #endregion */

/* #region VARIABLES */
const firstName = 'John'
const lastName = 'Doe'
const fullName = firstName + ' ' + lastName

let age = 34
age = 35

var v = 'any type of data'
/* #endregion */

/* #region NAMING */
const _$abc123 = 'symbols'
const isAdults = true // camelCase, boolean starts with "is"
/* #endregion */

/* #region MATH OPERATIONS */

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

/* #endregion */

/* #region LOGIC OPERATIONS */

/* #endregion */
