var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, n) {
  var newArray = [n, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(arr, n) {
  arr.unshift(n)
  return arr
}

function addElementToEndOfArray(arr, n) {
  var newArray = [arr..., n]
  return newArray
}