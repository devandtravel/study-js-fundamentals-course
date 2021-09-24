// JS object vs JSON

// JS object
const developer = {
  id: 1,
  fullName: 'Ivan Ivanov',
  salary: 1000,
  area: 'frontend',
  languages: {
    english: 'B2',
    spanish: 'native',
    hebrew: 'A1'
  }
}

// JSON
json = `{
    "id": 1,
    "fullName": "Ivan Ivanov",
    "salary": 1000,
    "area": "frontend",
    "languages": {
      "english": "B2",
      "spanish": "native",
      "hebrew": "A1"
    }
  }`

console.log(JSON.parse(json))
// { id: 1,
// fullName: 'Ivan Ivanov',
// salary: 1000,
// area: 'frontend',
// languages: { english: 'B2', spanish: 'native', hebrew: 'A1' } }

console.log(JSON.stringify(developer)) // {"id":1,"fullName":"Ivan Ivanov","salary":1000,"area":"frontend","languages":{"english":"B2","spanish":"native","hebrew":"A1"}}
