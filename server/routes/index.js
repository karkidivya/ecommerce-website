// manages all the routes in the application
import express from 'express'
import productController from '../controller/product/productController.js'
import userController from '../controller/user/userController.js'
import reviewController from '../controller/review/reviewController.js'

const router = express.Router()


//product routers
router.get('/products', productController.getProduct)
router.get('/getproduct/:id', productController.getProductById )
router.delete('/deleteitem/:id',productController.deleteProductById)
router.post( '/additem', productController.storeProduct)

//user router
router.post( '/createuser', userController.createUser )


//reveiw routers
router.post( '/createreview', reviewController.createReview )
router.get( '/getreview/:id', reviewController.getReview)


// routere.post('/')

export default router