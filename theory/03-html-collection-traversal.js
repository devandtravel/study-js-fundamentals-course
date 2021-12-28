const list1 = document.querySelectorAll('li') // NodeList
list1.forEach(el => (el.className = 'li'))
const list2 = document.getElementsByTagName('li') // HTMLCollection
// list2.forEach(el => (el.className = 'li')) //Property 'forEach' does not exist on type 'HTMLCollectionOf<HTMLLIElement>'
