const fs = require('fs')
const path = require('path')

const saveFile = async (data) => {
  try {
    const result = await fs.writeFileSync(
      path.resolve(__dirname, '../mockFiles/backup.json'),
      JSON.stringify(data)
    )
    return result
  } catch (e) {
    throw e
  }
}

module.exports = {
  saveFile,
}
