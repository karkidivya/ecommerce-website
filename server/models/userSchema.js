// make user schem with basic email and password fields
import mongoose from 'mongoose'

const user = { 
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    }
}

const userSchema = new mongoose.Schema( user , 'user' )

export default userSchema