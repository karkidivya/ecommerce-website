import productSchema from "../models/productShema.js"


const product = {
    getProducct : async (req, res) => {
        try{
            const products = await productSchema.find({})
            res.send(products)
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
            res.send('Product saved to the database')
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
                res.status(200).json(data)
            }
        })
    }
}