import Mongoose from 'mongoose'

const reviewModel = new Mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    productId:{
        type: Mongoose.Schema.Types.ObjectId,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    user: {
        type: ,
        required: true
    }

}, { timestamps: true})