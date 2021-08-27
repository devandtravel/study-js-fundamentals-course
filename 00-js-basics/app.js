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
