const { User } = require('../models')
const { files } = require('../services')

const createFile = async (req, res, next) => {
  try {
    const users = await User.find()
    const check = await files.saveFile(users)
    return res.status(200).json(check)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createFile,
}
