const { months } = require('./constants')
const { generateRandomDate, getMonthName } = require('./utils')

const dateNumbers = []
const dateStrings = []

for (let i = 0; i < 10; i++) {
  const randomDate = generateRandomDate()
  dateNumbers.push(randomDate)
  const [day, month, year] = randomDate.split('/')
  const monthName = getMonthName(months, month)
  dateStrings.push(`${day} ${monthName} ${year}`)
}

console.log(dateNumbers)
console.log(dateStrings)
