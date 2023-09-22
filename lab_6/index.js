const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./src/routes')
const { db } = require('./src/services')

const PORT = 5000

const app = express()

app.use(bodyParser.json())
app.use(routes)

app.use(express.static('public'))

void (async () => {
  try {
    await db.connect()
    app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
  } catch (err) {
    console.log(err)
  }
})()
