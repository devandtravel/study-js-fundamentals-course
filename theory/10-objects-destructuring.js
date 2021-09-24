const developer = {
  id: 1,
  fullName: 'Ivan Ivanov',
  salary: 1000,
  area: 'frontend',
  languages: {
    english: 'B2',
    spanish: 'native',
    hebrew: 'A1'
  }
}

const { area, id, languages: { spanish } = {}, ...otherProps } = developer || {}
