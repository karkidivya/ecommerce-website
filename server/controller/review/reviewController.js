import reviewSchema from '../../models/reviewModel.js'

const reviewController = {
    createReview: async ( req, res) =>{
        try{
            const review = req.body.review;
            console.log( review )
            const validReview = new reviewSchema( review )
            await validReview.save()
            res.sendStatus( 200).json( { status: 'successful', task: 'createreview'})
        }
        catch( error){
            console.log( 'An error occurred', error )
        }
   },

    getReview: async ( req, res ) =>{
        try{
            const reviewProductId = req.body.productId;
            const review = await reviewSchema.find( { productId })             
            res.sendStatus( 200 ).json( { status: 'successful', task: 'getreview', payload: review })
        }
        catch( error ){
            console.log( 'An error occurred', error);
        }
    } 
}


export default reviewController