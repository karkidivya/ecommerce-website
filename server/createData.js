import db from './utils/db.js'
import productSchema from './models/productShema.js'
import dotenv from 'dotenv'
dotenv.config()

const URI = process.env.MONGODB_URI
const database = new db()
await database.connectDB( URI )
const returnValue  = fetch( 'https://fakestoreapi.com/products?limit=100').then( res => res.json()).then( res => res)


await returnValue.then( async (products) =>{
    console.log( products.length )
    for( let i = 0; i < products.length ;i++){
        const item = new productSchema( 
                                {
                                    title: products[i].title,
                                    price: products[i].price,
                                    description: products[i].description,
                                    // add some discount to the original price 
                                    oldPrice: (products[i].price + Math.random() * 0.4 * products[i].price).toFixed( 2 ),
                                    isOld: false,
                                    rating: products[i].rating.rate,
                                    image: products[i].image,
                                    category: products[i].category,
                                })
        
        await item.save()

        
    }
})

database.closeDB()

