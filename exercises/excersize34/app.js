function clickHandler() {
  this.dataset.clicked = (Number(this.dataset.clicked) + 1).toString()
}
const buttons = [...document.querySelectorAll('[id^="clicker"]')]
buttons.forEach(button => button.addEventListener('click', clickHandler))
