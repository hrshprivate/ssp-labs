const getMonthName = (months, monthNumber) => {
  if (monthNumber >= 1 && monthNumber <= 12) {
    return months[monthNumber - 1]
  } else {
    return 'Invalid month number'
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const formatNumber = (number) => {
  return number < 10 ? `0${number}` : `${number}`
}

const generateRandomDate = () => {
  const day = getRandomInt(1, 31)
  const month = getRandomInt(1, 12)
  const year = getRandomInt(1999, 2025)
  return `${formatNumber(day)}/${formatNumber(month)}/${year}`
}

module.exports = {
  getMonthName,
  getRandomInt,
  formatNumber,
  generateRandomDate,
}
