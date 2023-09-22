const { Router } = require('express')
const router = Router()

const user = require('./user.route')
const file = require('./file.route')

router.use('/api/v1/users', user)
router.use('/api/v1/files', file)

module.exports = router
