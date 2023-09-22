const generateString = (length) => {
  const constants = 'bcdfghjklmnpqrstvwxz'
  if (length > constants.length) {
    return 'Error'
  } else if (length <= 0) {
    return 'Bad value for length'
  }

  let result = ''

  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * constants.length)
    result += constants.charAt(index)
  }

  return result
}

const randomString = generateString(0)
console.log(randomString)
