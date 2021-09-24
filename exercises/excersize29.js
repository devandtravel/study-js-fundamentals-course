// Практика по деструктуризации объекта
// Дан объект link. Используя деструктуризацию объекта, создайте новые переменные со значениями
// 'blank', 'link', 'anchor', 'Click me'.
// Имена переменных используйте согласно ключам
// (где необходимо, используйте переименование, создав переменную с именем renamed).

const link = {
  href: '#',
  title: 'simple link',
  target: 'blank',
  className: 'link',
  id: null,
  children: {
    span: {
      content: 'Click me',
      className: 'anchor'
    }
  }
}

const {
  children: {
    span: { content, className: renamed }
  },
  target,
  className
} = link
