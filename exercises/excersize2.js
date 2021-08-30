// Вывод всего содержимого объекта
// Дан объект htmlDiv. Используя цикл for..in выведите в консоль все значения ключей данного объекта.

const htmlDiv = {
  className: 'column',
  rel: 'main',
  id: 'block'
}

for (const key in htmlDiv) {
  console.log(htmlDiv[key])
}
