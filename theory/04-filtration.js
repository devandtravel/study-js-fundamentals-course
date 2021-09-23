const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const oddNumbers = numbers.filter(number => number % 2 !== 0)
console.log(oddNumbers)

const developers = [
  {
    id: 1,
    fullName: 'Anton Petrov',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
    salary: 1000
  },
  {
    id: 2,
    fullName: 'Ivan Ivanov',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
    salary: 950
  },
  {
    id: 3,
    fullName: 'Albert Sidorov',
    skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
    salary: 850
  }
]
const middleDevelopers = developers.filter(developer => developer.salary < 900)
console.log(middleDevelopers)
