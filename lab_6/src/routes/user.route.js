const { Router } = require('express')
const router = Router()

const { user } = require('../controllers')

router.post('/', user.createUser)
router.get('/', user.listUsers)
router.get('/search', user.searchByNameUsers)
router.put('/:id', user.updateUser)
router.delete('/:id', user.deleteUser)
router.get('/:id', user.getUser)

module.exports = router
