const btn = document.getElementById('myBtn')
const modal = document.getElementById('myModal')

btn.addEventListener('click', openModal)

function openModal() {
  modal.classList.add('open')
  attachModalEvents()
}
function closeModal() {
  modal.classList.remove('open')
  detachModalEvents()
}

function attachModalEvents() {
  modal.querySelector('.close').addEventListener('click', closeModal)
  document.addEventListener('keydown', handleEscape)
  modal.addEventListener('click', handleOutsideClick)
}
function detachModalEvents() {
  modal.querySelector('.close').removeEventListener('click', closeModal)
  document.removeEventListener('keydown', handleEscape)
  modal.removeEventListener('click', handleOutsideClick)
}

function handleEscape(event) {
  if (event.key === 'Escape') closeModal()
}
function handleOutsideClick(event) {
  const isClickOutside = !!event.target.closest('.modal-content')
  if (!isClickOutside) closeModal()
}
