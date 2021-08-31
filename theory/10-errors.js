function sum(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    throw new Error('Error message: a and b must be numbers')
  }
  return a + b
}

try {
  sum() // error: no function arguments
  console.log('invisible because try statement there')
} catch (error) {
  console.error(error.message)
}

console.log('end')
