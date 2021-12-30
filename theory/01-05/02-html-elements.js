const anchor = <a href='/ru/docs/Glossary/API'>API</a>
anchor.innerText // 'API'
anchor.innerText = 'REST API' // 'REST API'
anchor // <a href='/ru/docs/Glossary/API'>REST API</a>

anchor.getAttribute('href') // '/ru/docs/Glossary/API'
anchor.getAttribute('target') // null
anchor.setAttribute('target', '_blank') //  <a href='/ru/docs/Glossary/API' target='_blank'>API</a>

anchor.href // 'http://developer.mozilla.org/ru/docs/Glossary/API'
anchor.href = '/404' // 'http://developer.mozilla.org/404'

anchor.style.color = 'orange' // 'orange'
anchor.style.display = 'none' // 'none'
