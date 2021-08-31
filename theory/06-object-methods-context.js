const developer = {
  name: 'Vasya',
  familyName: 'Petrov',
  age: 30,
  skills: ['JS', 'CSS', 'HTML'],
  isMarried: false,

  incrementAge() {
    this.age++
  },
  addAge(years) {
    this.age = this.age + years
  },
  getMarried() {
    this.isMarried = true
  },
  getDivorced() {
    this.isMarried = false
  }
}

developer.incrementAge()
developer.addAge(5)
developer.getMarried()
developer.getDivorced()
console.log(developer)
console.log(developer.hasOwnProperty('age'))
  