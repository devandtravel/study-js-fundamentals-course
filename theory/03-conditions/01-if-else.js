let age = 20
let salary = 2000

// if-else statement
if (age >= 18) {
  console.log('access granted')
} else {
  console.log('access denied')
}

// no curly brackets
if (salary > 1500) console.log('I need to improve')

// nested if statement
if (salary > 3000) {
  console.log("It's time to relax")
} else if (salary > 2500) {
  console.log('Good enough. But I can be better')
} else if (salary > 2000) {
  console.log('I need to improve')
} else {
  console.log('And so on...')
}

