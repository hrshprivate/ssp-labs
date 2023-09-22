const { countLetters, countSpaces, countVowels } = require('./utils')

const text = new String('Test string for count letters')

const vowelCount = countVowels(text)
const spaceCount = countSpaces(text)
const totalCount = countLetters(text)

console.log(`Count of vowels: ${vowelCount}`)
console.log(`Count of spaces: ${spaceCount}`)
console.log(`Count of all letters: ${totalCount}`)
