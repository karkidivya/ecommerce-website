import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const SECRET = process.env.SECRET

const generateToken = ( req ) =>{
    const token = jwt.sign( { id: req.body.id} , SECRET, { expiresIn: '1h'})
    return token
}


const validateToken = ( req) =>{
    const decoded = jwt.verify(token, SECRET)
    return decoded ? decoded: false    
}

const logout = ( req ) =>{
    const token = req.body.authorization
    const decoded = jwt.verify(token, SECRET)

}

const handleAuthorization = ( req) =>{
    const id = req.body.id
    const password = req.body.password

    result = verifyId(id, password)
    if( result){
        const token = generateToken( req )
        return token
    }
    else{
        return false
    }
}
const validateUser = ( req ) =>{
    const token = req.body.authrization
    return validateToken( token) 
}

