const randomFloat = (upper, lower) => {
  return parseFloat((Math.random() * (upper - lower) + lower).toFixed(2))
}

const averageValue = (arr) => {
  return arr.reduce((sum, value) => sum + value, 0) / arr.length
}

module.exports = {
  randomFloat,
  averageValue,
}
