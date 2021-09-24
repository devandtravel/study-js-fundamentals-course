Number('12') // 12
Number({}) // NaN
Number(true) // 1

String(000) // '0'
String(123) // '123'

Boolean('123') // true
Boolean('') // false
Boolean([]) // true

const obj = { a: 1, b: 2, c: 3 }
Object.create({}) // {}
Object.keys(obj) // [ 'a', 'b', 'c' ]
Object.values(obj) // [ 1, 2, 3 ]
Object.entries(obj) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

Array.isArray({}) // false
Array.from('string') // [ 's', 't', 'r', 'i', 'n', 'g' ]
Array.from([1, 2, 3], x => x * 2) // [ 2, 4, 6 ]
Array.of(1, 2, 3) // [ 1, 2, 3 ]
