// don't try this

// function recurce() {
//   return recurce()
// }
// recurce()

// terminal condition
// recurcive rule

function factorial(n) {
  if (n === 0) return 1
  return n * factorial(n - 1)
}
console.log(factorial(5))

let counter = 0
function repeater(char) {
  counter++
  if (counter === 5) {
    counter = 0
    return char
  }
  return char + repeater(char)
}

console.log(repeater('x')) // xxxxx
