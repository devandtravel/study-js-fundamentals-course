// Практика на сортировку массивов
// Дан массив food и коллекция players. Создайте одну общую функцию сортировки,
// которая бы позволяла сортировать food по алфавиту от А - Я, а также игроков коллекции по ключу surname.

const food = ['Apple', 'Melon', 'Banana', 'Yogurt', 'Orange', 'Stawberry']

const players = [
  {
    id: 1,
    name: 'Cristiano',
    surname: 'Ronaldo',
    club: 'Juventus'
  },
  {
    id: 2,
    name: 'Lionel',
    surname: 'Messi',
    club: 'Barcelona'
  },
  {
    id: 3,
    name: 'Karim',
    surname: 'Benzema',
    club: 'Real Madrid'
  },
  {
    id: 4,
    name: 'Maxi',
    surname: 'Gomez',
    club: 'Valencia'
  },
  {
    id: 5,
    name: 'Quincy',
    surname: 'Promes',
    club: 'Spartak'
  }
]

function sortItems(a, b) {
  if (a > b) return 1
  if (a <= b) return -1
}

food.sort(sortItems)
console.log(food)

players.sort((a, b) => sortItems(a.surname, b.surname))
console.log(players)
