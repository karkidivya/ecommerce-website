import express from 'express'
import cors from 'cors'
//import dotenv
import dotenv from 'dotenv'
//now import secrets from dotenv
//import database class
import Database from './utils/db.js'
//import schema controller
import productController from './controller/product/productController.js'

dotenv.config()

const db = new Database();
const URI = process.env.MONGODB_URI
await db.connectDB( URI )

const PORT  = process.env.PORT 
// basic code for backend 
const app = express()
app.use(cors())
app.use(express.json())

app.get( '/', ( req, res ) =>{
    console.log( 'Request received')
    res.send('Hello World')
})

app.get('/products', productController.getProduct)

app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${PORT}` )
})