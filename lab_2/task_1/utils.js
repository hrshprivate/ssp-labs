const fs = require('fs')

const lineReader = (file) => {
  const tempNumbers = []

  const allFileContents = fs.readFileSync(file, 'utf-8')

  allFileContents.split(/\r?\n/).forEach((line) => {
    tempNumbers.push(line)
  })

  return tempNumbers
}

const saveArray = async (arr) => {
  const output = arr.join('\n')

  await fs.writeFileSync('lab_2/task_1/output.txt', output)
}

const isSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i])
    if (parseInt(arr[i]) < parseInt(arr[i - 1])) {
      return 'Desc'
    }
  }
  return 'Inc'
}

module.exports = {
  lineReader,
  saveArray,
  isSorted,
}
