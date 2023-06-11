import mongoose from "mongoose"
import Product from "./models/productShema.js"
import dotenv from 'dotenv'
dotenv.config()

//make connection to the database
const URI = process.env.MONGODB_URI

try{
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database connected')
}
catch(error){
    console.log('An error occurred', error)
}


//save a lot of dummy products for testing
for ( let i = 0; i < 1000; i++){
    const product = new Product({
        title: 'Test Product' + String(i),
        //change the description for each product
        description: 'This is a '+ String(i)+'th product',
        price: Math.random() * 10000,     //change each product price to a random number
        category: 'test',
        //change the iamge to a random image for each product
        image: 'https://picsum.photos/200/300'
    })

    try{
        await product.save()
        console.log('Product saved to the database')
    }
    catch(error){
        console.log( 'An error occurred', error)
    
    }
}



//close the instance
mongoose.connection.close()