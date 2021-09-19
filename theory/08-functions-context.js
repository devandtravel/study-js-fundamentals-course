// this in browser
const cat1 = {
  name: 'Murka',
  say() {
    const greeting = () => console.log(this.name)
    setTimeout(greeting, 1000)
  }
}
cat1.say() // Murka

const cat2 = {
  name: 'Murka',
  say() {
    function greeting() {
      console.log(this.name)
    }
    setTimeout(greeting, 1000)
  }
}
cat2.say() // undefined
