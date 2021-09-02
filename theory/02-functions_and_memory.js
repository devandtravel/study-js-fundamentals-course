// ref to function saved in global memory
function sum(a, b) {
  return a + b
}

// execution context 'a' and 'b' temporary stays in memory while function execution
const result1 = sum(4, 6) 
const result2 = sum(5, 8)

// result saved in global memory after function execution
console.log(result)