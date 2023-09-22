const stringArray = ['Hello*World*JavaScipt', 'Production*II*20']

const delimiter = '*'

const stringsDelimiter = (arr, delimiter) => {
  const extractedStrings = []

  for (const str of arr) {
    const words = str.split(delimiter)
    extractedStrings.push(words)
  }

  return extractedStrings.flat()
}

const extractedStrings = stringsDelimiter(stringArray, delimiter)

console.log(extractedStrings)
