// objects
const Petr = {
  age: 20,
  hobby: 'programming'
}

const Ivan = Petr
Ivan.skills = ['gaming'] // add key-value

console.log(Ivan)
console.log(Petr) // also changed

// arrays
const nimbers1 = [1, 2, 3]
const numbers2 = nimbers1

numbers2.push(4)
console.log(numbers2) // [1, 2, 3, 4]
console.log(nimbers1) // [1, 2, 3, 4], also changed

