// function twoSquared() {
//   return 2 * 2
// }

// twoSquared()

// function threeSquared() {
//   return 3 * 3
// }

// threeSquared()

function numSquared(num) {
  return num * num
}

numSquared(num)

// function copyArrayAndSquareNums(arr) {
//   const output = []
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] ** 2)
//   }
//   return output
// }

// function copyArrayAndDivideByTwo(arr) {
//   const output = []
//   for (let i = 0; i < arr.length; i++) {
//     output.push(arr[i] / 2)
//   }
//   return output
// }

function copyArrayAndDoSmth(arr, instructions) {
  const output = []
  for (let i = 0; i < arr.length; i++) {
    output.push(instructions(arr[i]))
  }
  return output
}

console.log(copyArrayAndDoSmth([1, 2, 3, 4, 5, 6, 7, 8, 9], numSquared)) // [1, 4, 9, 16, 25, 36, 49, 64, 89]
