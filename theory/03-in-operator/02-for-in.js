const developer = {
  name: 'Vasya',
  familyName: 'Petrov',
  age: 30,
  skills: ['JS', 'CSS', 'HTML'],
  isMarried: false
}

// keys
for (const key in developer) {
  console.log(key, '-', developer[key])
}

console.log('-'.repeat(20))
