const countVowels = (text) => {
  const vowelRegex = /[aeiouAEIOU]/g
  const vowels = text.match(vowelRegex)
  return vowels ? vowels.length : 0
}

const countSpaces = (text) => {
  const spaceRegex = / /g
  const spaces = text.match(spaceRegex)
  return spaces ? spaces.length : 0
}

const countLetters = (text) => {
  const letterRegex = /[a-zA-Z]/g
  const letters = text.match(letterRegex)
  return letters ? letters.length : 0
}

module.exports = {
  countVowels,
  countSpaces,
  countLetters,
}
