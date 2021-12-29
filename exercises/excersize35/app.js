const registeredUsers = [
  ['admin', 'KoI18'],
  ['manager', 'SuperMe108'],
  ['editor', '12345']
]

const form = document.querySelector('form')

form.addEventListener('submit', validate)

function validate(event) {
  const login = document.querySelector('input[name="login"]')
  const password = document.querySelector('input[name="password"]')
  event.preventDefault()
  function checkAccess() {
    for (let index = 0; index < registeredUsers.length; index++) {
      const [user, pass] = registeredUsers[index]
      if (user === login.value && pass === password.value) {
        console.log('Access granted')
        form.reset()
        return null
      } else {
        console.log('Incorrect login or password')
        return null
      }
    }
  }
  if (login.value && password.value) {
    checkAccess()
  } else console.log('All fields are required')
}
