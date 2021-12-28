const buttons = document.querySelectorAll('.accordion')
function show() {
  this.nextElementSibling.classList.toggle('show')
}
;[...buttons].forEach(button => button.addEventListener('click', show))
