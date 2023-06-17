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
    storeProduct: async ( req, res) =>{
        try{
            const product = new productSchema({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                category: req.body.category,
                image: req.body.image
            })
            await product.save()
            res.status(200).json( {task: 'storeProduct', status: 'successful'})
        }
        catch(error){
            console.log( 'An error occurred', error)
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
    getProductId: async( req, res) =>{
        const productId = req.body.id
        productSchema.findById( productId, ( error, data ) =>{
            if( error ){
                res.status(500).json({message: 'An error occurred'})
            }
            else{
                res.status(200).json( {task : 'getProductId',status:'unsuccessful', payload: data})
            }
        })
    },
    createProduct: async( req, res) =>{
        try {const product = req.body.product
        const producttModel = new  productSchema( product)
        await producttModel.save()
        res.status(200).json({ task: 'createProduct', status: 'successful'})
        }catch( error ){
            return restatus( 500 ).json( { task: 'createProduct',status: 'unsuccessful',  reason: error })
        }
    }
}

export default product