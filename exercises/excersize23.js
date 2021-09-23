// Практика на маппинг массивов и коллекций
// 1) Дан массив чисел numbers. Создайте на его основе новый массив doubledNumbers, в котором каждый элемент из оригинального массива умножен на два.
// 2) Дана коллекция developers. Создайте на ее основе новую коллекцию middleDevelopers, увеличив значения ключа salary на 500, а также добавив к ключу skills значение 'TypeScript'.
const numbers = [1, 22, 12, 66, 90, 51, 11]
const doubledNumbers = numbers.map(element => element * 2)

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
const middleDevelopers = developers.map(developer => {
  return {
    ...developer,
    salary: developer.salary + 500,
    skills: [...developer.skills, 'TypeScript']
  }
})

console.log(doubledNumbers, middleDevelopers, developers)
