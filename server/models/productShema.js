import mongoose from 'mongoose';
const Schema = mongoose.Schema;
//make a shopping item schema
const ProductSchema = new Schema({
    title:{
        type: String,
        requied: true,
    }, 

    description:{
        type: String,
        requied: true,
    },

    price: {
        type: Number,
        required: true,
    },
    category:{
        type: String,
        requied: true,
    },
    image:{
        type: String,
        required: true,
    },
    

})

const Product = mongoose.model('Product', ProductSchema);

export default Product