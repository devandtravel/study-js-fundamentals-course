const a = 1
const b = 2

// function declaration
f1(a, b) // can be called before declaration 
function f1(a, b) {
  return a + b // optional
}

// function expression
const f2 = function (a, b) {
  return a + b // optional
}
f2(a, b)

// IIFE (Immidiately-invoked function expression)
;(function (a, b) {
  return a + b // optional
})(a, b)

// arrow function
const f3 = (a, b) => {
  return a + b
}
f3(a, b)

const f4 = (a, b) => a + b // one string return
f4(a, b)

const f5 = a => a + 1 // one argument and one string return
f5(a)

const f6 = () => console.log('no argument and one string return')
f6()

const f7 = a => {
  console.log('no argument and multiple strings return')
  a + 1
}
f7(a)



