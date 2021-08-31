var riddle = {
  question: 'Висит груша нельзя скушать',
  correctAnswer: 'лампочка',
  hints: ['это съедобное', 'это фрукт'],
  tries: 3,
  checkAnswer(answer) {
    // TODO: написать логику проверки правильного ответа
    // alert для пользователя, console.log()
    if (this.tries === -1) {
      return
    }
    if (!this.tries) {
      alert('Игра окончена')
      console.log('Игра окончена')
      alert('Правильный ответ: лампочка')
      console.log('Правильный ответ:', this.correctAnswer)
      return
    }
    if (answer.trim().toLowerCase().includes(this.correctAnswer)) {
      alert('Правильный ответ')
      console.log('Правильный ответ')
      alert('Игра окончена')
      console.log('Игра окончена')
      this.tries = -1
      return
    } else {
      alert('Неправильный ответ')
      console.log('Неправильный ответ')
      this.tries--
      if (this.tries <= 2 && this.tries > 0) {
        alert(this.hints[this.tries - 1])
        console.log(this.hints[this.tries - 1])
      }
    }
  }
}

window.onload = function () {
  document.getElementById('riddle').innerText = riddle.question
}

function check() {
  var input = document.getElementsByTagName('input')[0]

  var guessedAnswer = input.value

  if (guessedAnswer) {
    // TODO: вызвать функцию checkAnswer у объекта загадки, передав туда ответ
    riddle.checkAnswer(guessedAnswer)
  }
}
