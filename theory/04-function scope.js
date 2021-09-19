let isValid = false
const str = 'hello'

function isString(str) {
  const isValid = typeof str === 'string'
  return isValid
}

const res = isString('1234') // true

let message = ''
const age = 15

if (age > 18) {
  message = 'Hello'
} else {
  message = 'Adios'
}
