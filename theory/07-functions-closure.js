// function returns the another function that remember the scope

function hello(name) {
  const helloName = () => console.log('hello', name)
  return helloName
}

const helloWorld = hello('world')
helloWorld()

function outer() {
  let counter = 0
  function incrementCounter() {
    console.log(++counter)
  }
  return incrementCounter
}

const myCounter1 = outer()
myCounter1() // 1
myCounter1() // 2
myCounter1() // 3

const myCounter2 = outer()
myCounter2() // 1
myCounter2() // 2
myCounter2() // 3
