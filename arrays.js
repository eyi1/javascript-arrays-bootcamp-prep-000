var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
chocolateBars

var array = [1]

function addElementToBeginningOfArray(array, element){
var newArray = [element, array[0] ]
return newArray
}
addElementToBeginningOfArray

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, element){
  array.push(element)
}
