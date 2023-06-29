import userSchema from "../../models/userSchema.js";

const userController = {
    //create user
    createUser: async(param ) =>{
        try{
            const newUser = new userSchema( param )
            await newUser.save()
        }
        catch(error){
            console.log('An error occurred', error)
        }
    },
    //verify user
    verifyUser: async(  param ) =>{
        try{
            const user = await userSchema.findOne( {email: param.email} )
            if( user ){
                if( user.password === param.password ){
                    return user
                }
                else{
                    return false
                }
            }
            else{
                return false
            }
        }catch( error ) {
            console.log('An error occurred', error)
        }
    },

}

export default userController