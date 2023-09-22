const { lineReader, saveArray, isSorted } = require('./utils')

const numbers = lineReader('lab_2/task_1/input.txt')

const maxCount = numbers[0]
numbers.shift()

const sortType = numbers[0]
numbers.shift()

if (sortType === 'inc') numbers.sort((a, b) => a - b)
else numbers.sort((a, b) => b - a)

console.log(`Max count: ${maxCount}`)

console.log(numbers)
console.log(isSorted(numbers))

saveArray(numbers)
