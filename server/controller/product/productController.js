import productSchema from "../../models/productShema.js"


const product = {
    getProduct : async (req, res) => {
        
        try{
            console.log( 'Request for product received')
            const products = await productSchema.find({}).limit( 20 )
            res.status(200).json({ task: 'getProduct', status:'successful', payload: products})
        }
        catch( error ){
            console.log('An error from productController.js occurred', error)
        }
    },

    updateProduct: async ( req, res) =>{
        try{
            const productId = req.params.id
            const product = await productSchema.findById(productId)
            if( product ){
                product.title = req.body.title
                product.description = req.body.description
                product.price = req.body.price
                product.category = req.body.category
                product.image = req.body.image

                const updatedProduct = await product.save()
                res.send(updatedProduct)
            }
        }catch( error ){
            console.log( 'An error occurred', error)

        }
    },
    deleteProductById: async( req, res) =>{
        const { id } = req.params
        try{
            await productSchema.deleteOne( { _id: id })
            res.status( 200).json( { task: 'deleteItem', status: 'successful'})
        }
        catch( error ){
            console.log( 'An error occurred', error)
        }
    },
    getProductById: async( req, res) =>{
        const productId = req.body.id
        await productSchema.findById( productId, ( error, data ) =>{
            if( error ){
                res.status(500).json({message: 'An error occurred'})
            }
            else{
                res.status(200).json( {task : 'getProductId',status:'unsuccessful', payload: data})
            }
        })
    },
    storeProduct: async( req, res) =>{
        try {const product = req.body.product
            console.log( "New product is to be saved to the database")
            console.log( req.body )
            const producttModel = new  productSchema( product)
            await producttModel.save()
            res.status(200).json({ task: 'createProduct', status: 'successful'})
        }catch( error ){
            console.log ( error )
            return res.status( 500 ).json( { task: 'createProduct',status: 'unsuccessful',  reason: error })
        }
    }
}

export default product