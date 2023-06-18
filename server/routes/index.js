// manages all the routes in the application
import express from 'express'
import productController from '../controllers/productController.js'
import userController from '../controllers/userController.js'


const router = express.Router()


router.get('/',)
router.get('/product', productController.getProduct)

router.post('/login', userController.login)
router.post('/register', userController.register)
// routere.post('/')

export default router