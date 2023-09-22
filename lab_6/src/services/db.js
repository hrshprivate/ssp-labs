const mongoose = require('mongoose')

const { url } = require('../config/database.config')

const connect = async () => {
  const uri = url
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  return await mongoose.connect(uri, options)
}

const disconnect = async () => {
  return await mongoose.disconnect()
}

mongoose.connection.on('error', (err) => {
  console.log('mongoose.connection.on')
  console.log(err)
})

module.exports = {
  connect,
  disconnect,
}
