const developers = [
  {
    id: 1,
    fullName: 'Ivan Ivanov',
    salary: 1000
  },
  {
    id: 2,
    fullName: 'Petr Petrov',
    salary: 900
  },
  {
    id: 3,
    fullName: 'Ian Melnikov',
    salary: 1100
  },
  {
    id: 4,
    fullName: 'Antonio Banderas',
    salary: 1000
  }
]

const numbers = [1, 2, 3, 4, 10, 12, 23]
const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'] // [ 'Amsterda

const [mad, , ams, par] = cities
console.log(mad, ams, par) // Madrid Paris Berlin

const [c1, , c2, ...tail] = cities
console.log(c1, c2, tail) // Madrid Paris [ 'Berlin', 'Kiev' ]

let x = 10
let y = 20

;[y, x] = [x, y]
console.log(x, y) // 20 10
