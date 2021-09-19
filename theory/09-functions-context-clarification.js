const developer = {
  name: 'Mikhail',
  salary: 2500,
  getBonus(sum) {
    console.log(this.name, 'has a salary with bonus this month', this.salary + sum)
  }
}
developer.getBonus(250) // 2750

const manager = {
  name: 'Anna',
  salary: 1800
}
developer.getBonus().call(manager, 150) //1950
developer.getBonus().apply(manager, [150]) // 1950
manager.getBonus = developer.getBonus.bind(manager)
manager.getBonus(150) // 1950
