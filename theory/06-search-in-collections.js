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

firstIvanIvanov = developers.find(item => item.fullName === 'Ivan Ivanov')
console.log(firstIvanIvanov) // { id: 1, fullName: 'Ivan Ivanov', salary: 1000 }
firstIvanIvanov = developers.findIndex(item => item.fullName === 'Ivan Ivanov')
console.log(firstIvanIvanov) // 0
