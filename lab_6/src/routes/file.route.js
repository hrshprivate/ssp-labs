const { Router } = require('express')
const router = Router()

const { file } = require('../controllers')

router.post('/', file.createFile)

module.exports = router
