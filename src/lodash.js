const _ = require('lodash')

const students = [
  {
    name: 'João',
    testGrade: 7.6
  },
  {
    name: 'Maria',
    testGrade: 8.6
  },
  {
    name: 'Pedro',
    testGrade: 8.1
  }
]

const average = _.sumBy(students, 'testGrade') / students.length

console.log(average)