var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
chocolateBars

var array = [1]

function addElementToBeginningOfArray(array, element){
  return array [element,...array]
}
addElementToBeginningOfArray ([1], 'foo')

function addElementToBeginningOfArray(array, element){
return array.unshift(element)

}
addElementToBeginningOfArray([1],'foo')
