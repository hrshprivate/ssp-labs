const { User } = require('../models')

const createUser = async (req, res, next) => {
  try {
    const { email, fullName, address } = req.body

    const user = await User.create({ email, fullName, address })
    return res.status(200).json(user)
  } catch (e) {
    console.log(e)
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    )
    return res.status(200).json(user)
  } catch (e) {
    console.log(e)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    console.log('assadads')
    const user = await User.findByIdAndDelete(id)
    return res.sendStatus(204)
  } catch (e) {
    console.log(e)
  }
}

const getUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndDelete(id)
    return res.status(200).json(user)
  } catch (e) {
    console.log(e)
  }
}

const listUsers = async (req, res, next) => {
  try {
    const users = await User.find().sort({ createdAt: -1 })
    return res.status(200).json(users)
  } catch (e) {
    console.log(e)
  }
}

const searchByNameUsers = async (req, res, next) => {
  try {
    const { fullName } = req.query
    let query = {}
    query.fullName = { $regex: fullName }
    const users = await User.find(query)
    console.log(users)
    return res.status(200).json(users)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  listUsers,
  searchByNameUsers,
}
