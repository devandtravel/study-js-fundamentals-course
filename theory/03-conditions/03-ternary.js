// expression not a statement

const age = 18

age >= 18 ? console.log('Access granted') : console.log('Access denied')

// complex case
age >= 18
  ? console.log('Access granted')
  : age > 16
  ? console.log('Access granted partially')
  : console.log('Access denied')

// alternative option
console.log('Access', age >= 18 ? 'granted' : 'denied')

let status = 'idle'
let statusNumber = status === 'idle' ? 0 : 1
