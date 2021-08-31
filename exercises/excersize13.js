// Использование встроенных методов чисел и строк
// 1) Даны две строки correctAnswer и userAnswer. Необходимо привести обе строки к нижнему регистру и проверить содержит ли userAnswer в себе строку correctAnswer.
// Булевый ответ сохранить в переменную isCorrect.
// 2) Дана переменная salary с числовым значением. Необходимо создать переменную salaryFixed, в которой исходное числовое значение округлено до двух знаков после запятой.

// 1.
const correctAnswer = 'JavaScript'
const userAnswer = ' javaScript! '
const isCorrect = userAnswer.toLowerCase().includes(correctAnswer.toLowerCase()) // TODO: сохранить true или false в зависимости от выполнения условия по заданию 1.

// 2.
const salary = 15000.2085
const salaryFixed = salary.toFixed(2)

console.log(isCorrect)
console.log(salaryFixed)

