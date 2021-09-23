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

const arr2 = ['Riga', ...cities, 'Moscow']
console.log(arr2)

const dev1 = {
  id: 1,
  fullName: 'Ivan Ivanov',
  salary: 1000
}
const dev2 = { ...dev1, role: 'frontend' }
console.log(dev2)

function customSum(a, b, ...args) {
  let result = a + b
  for (let index = 0; index < args.length; index++) {
    result += args[index]
  }
  return result
}
console.log(customSum(...numbers))
