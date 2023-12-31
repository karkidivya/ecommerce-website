import React from 'react';

import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import { addToCart } from '../../redux/bazaarSlice';
import { ToastContainer, toast } from 'react-toastify';
import './productsCard.css'

export const ProductsCard = ({product}) => {

  const dispatch =useDispatch()

  const {title, oldPrice, price, image, category, isOld, description, _id} = product;
  const navigate = useNavigate()


  const idString = (Title)=>{
    const newIdString = String(Title).toLowerCase().split(" ").join("");
    return newIdString;
  } 
  const rootId = idString(title)
  // console.log(rootId)

  const handleDetails = ()=>{
    navigate(`/product/${rootId}/${_id}`,{
      state: {
        item: product
      }
    })
  }


  return (
    <div  className='group relative productsCard'>
      <div  className="h-52 flex items-center justify-center cursor-pointer overflow-hidden">
        <img onClick={handleDetails} className='w-full aspect-auto group-hover:scale-110 duration-500'
         src={image} alt="" />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
          <div className = 'title-wraper'>
            <h2 className='font-arial productsCardTitle '>{title}</h2>
          </div>
          <div className='flex justify-between items-center'>
          {/* <p>{category}</p> */}
          <div className='flex gap-2 justify-end'>
            <p className='line-through text-gray-500'>Rs. {price}</p>
            <p className='font-semibold'>Rs. {oldPrice}</p>
          </div>

        </div>
        <div className='flex justify-center mt-3'>
          <button onClick={()=>dispatch(addToCart({
            _id: _id, 
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
            description: product.description
          })) && toast.success(`${product.title} is added`)} 
          className='bg-light-gray text-blue-600 hover:text-blue-400'>
            Add To Cart
          </button>
        </div>
        <div className='top-2 right-2 absolute'>
          {!isOld && <p className='bg-black  text-white font-semibold px-6 py-1'>Sale</p>}
        </div>
      </div>
      <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}


