const validator = require('validator')
getNotes = require('./notes.js')

console.log(getNotes());
console.log(validator.isURL('test'));
console.log(validator.isEmail('test@mail.com'));