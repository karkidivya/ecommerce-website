// manages all the routes in the application
import express from 'express'
import productController from '../controller/product/productController.js'
// import userController from '../controller/user/userController.js'


const router = express.Router()


router.get('/products', productController.getProduct)

// router.post('/login', userController.login)
// router.post('/register', userController.register)

router.get('/getproduct/:id', productController.getProductById )
router.delete('/deleteitem/:id',productController.deleteProductById)

router.post( '/additem', productController.storeProduct)
// routere.post('/')

export default router