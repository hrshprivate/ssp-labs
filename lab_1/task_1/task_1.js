const { months } = require('./constants')
const { randomFloat, averageValue } = require('./utils')

const randomValues = []

for (let i = 0; i < months.length; i++) {
  const randomValue = randomFloat(0.0, 100.0)
  randomValues.push(randomValue)
}

for (let i = 0; i < 12; i++) {
  console.log(`${months[i]}: ${randomValues[i]}`)
}

console.log(`Average value: ${averageValue(randomValues).toFixed(2)}`)
