// Использование методов объекта
// Дан объект person. Добавьте ему два метода:
// greeting - вызов метода должен выводить в консоль "Hello"
// changeSurname - метод должен принимать новое имя и изменять значение свойства surname исходного объекта.

const person = {
  name: 'Anna',
  surname: 'Dance',
  age: 18,

  greeting() {
    console.log('Hello')
  },

  changeSurname(newSurname) {
    this.surname = newSurname
  }
}