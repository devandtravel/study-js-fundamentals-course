const developer = {
  name: 'Vasya',
  familyName: 'Petrov',
  age: 30,
  skills: ['JS', 'CSS', 'HTML'],
  isMarried: false
}

//overwrite value in the object
developer.isMarried = true
console.log(developer.isMarried) // true

// delete key-value in the object
delete developer.isMarried // do not use delete because no crossbrowser compatibility
console.log(developer.isMarried) // undefined

// alternative to .dot syntax
console.log(developer['age']) // undefined
