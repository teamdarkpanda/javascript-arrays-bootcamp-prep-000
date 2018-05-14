var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, n) {
  var newArray = [n, ...arr]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(arr, n) {
  return arr.unshift(n)
}