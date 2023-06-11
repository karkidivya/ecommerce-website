import express from 'express'
import cors from 'cors'
//import dotenv
import dotenv from 'dotenv'
//now import secrets from dotenv
dotenv.config()
const PORT  = process.env.PORT 
// basic code for backend 
const app = express()
app.use(cors())
app.use(express.json())

app.get( '/', ( req, res ) =>{
    console.log( 'Request received')
    res.send('Hello World')
})

app.listen( PORT, () => {
    console.log( `Server running on http://localhost:${PORT}` )
})