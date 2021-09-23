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
const cities = ['Madrid', 'Amsterdam', 'Paris', 'Berlin', 'Kiev'] // [ 'Amsterdam', 'Berlin', 'Kiev', 'Madrid', 'Paris' ]

cities.sort()
console.log(cities)

numbers.sort()
console.log(numbers) // [ 1, 10, 12, 2, 23, 3, 4 ]
numbers.sort((a, b) => b - a)
console.log(numbers) // [ 23, 12, 10, 4, 3, 2, 1 ]
numbers.reverse()
console.log(numbers) // [ 1, 2, 3, 4, 10, 12, 23 ]

developers.sort((a, b) => a.salary - b.salary)
console.log(developers) // [ 1, 2, 3, 4, 10, 12, 23 ]
