import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()

var USERS = []

//generate access token
function generateAccessToken( user ){
    // user is the payload to generate a token
    return jwt.sign( user, prooess.env.SECRET, { expiresIn: '2h'})

}

function login( req, res){
    const user =  { id: req.body.id}
    const accessToken = generateAccessToken( user )
    USERS.push( user )    
    res.json( {accessToken: accessToken})
}

function logout( req, res){
    const userId = req.body.id
    USERS = USERS.filter( user => user.id !== userId)
    res.json( {message: 'user logged out'})
}

function authenticaateToken( req, res, next){
    const authHeader = req.headers['authorization']
    const token =  authHeader?.split(' ')[1] // Bearer <token>
    if( token == null) return res.sendStatus(401)

    jwt.verify( token, process.env.SECRET, ( error, user) =>{
        if( error ) return res.sendStatus(403)
        req.user = user
        next()
    })
}