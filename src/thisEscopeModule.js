/**
 * Where is the this escope?
 */
console.log(global === this)
console.log(module === this)
console.log(module.exports === this) // true

/**
 * this. = module.exports ...
 */
this.sayHello = function () {
  console.log('hello!')
}