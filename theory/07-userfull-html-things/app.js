const block1 = document.querySelector('#block')

const block2 = block1.querySelector('#too')

console.log(block2.getBoundingClientRect())

block2.insertAdjacentHTML('afterend', `<h2>Adjacent HTML Text</h2>`)

console.log(block2.closest('#block'))
