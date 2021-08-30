let tryes = 0

while (tryes < 3) {
  const age = 'jop['
  if (+age) {
    console.log(`Age: ${age}`)
    break
  }
  tryes++
  console.log('Incorrect data')
}

console.log('After loop')
