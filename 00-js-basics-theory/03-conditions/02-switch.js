let status = 'idle'

switch (status) {
  case 'idle':
    console.log('Nothing is happening')
    break
  case 'loading':
    console.log('Data is loading')
    break
  case 'respond':
    console.log('We have a response')
    break
  case 'error':
    console.log('Something went wrong')
    break
  default:
    console.log('No status')
    break
}
