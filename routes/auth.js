const experss= require('express');
const router= experss.Router()

const userController= require('../controller/userController') 


//post routes
router.post('/register', userController.register)
router.post('/login', userController.login)


module.exports = router