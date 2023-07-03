/**
 *
 * Review Form
 *
 */

import React, { useState } from 'react';

import { Button } from '@mui/material'
import Input from '../input';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// const recommedableSelect = [
//   { value: 1, label: 'Yes' },
//   { value: 0, label: 'No' }
// ];

const ReviewForm = () => {
  
  const [ review, setReview ] = useState({title: '', review: '', rating: 0})


  const location = useLocation()

  const userInfo = useSelector( state => state.bazar.userInfo )

  const reviewChange = (name, value) =>{
    setReview( prev =>{
      return { ...prev, [name]: value }
    })    
  }

  const addReview = async (reviewData) =>{
    await fetch( 'http://localhost:5000/createreview',{
      method:'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:  JSON.stringify({review: reviewData}) 
    })
  }
  const handleSubmit = event => {
    event.preventDefault();
    if( userInfo ){
      const title = review.title
      const productId = location.state.item._id
      const comment = review.review
      const  rating = review.rating
      const user = userInfo.id;
      const reviewObject = { title, productId, rating, comment, user }
      console.log( reviewObject )
      addReview( reviewObject );
    }
    else{
      toast.error('You have to be a user to post a Review!')
    }
  };

  return (
    <div className='bg-white p-4 box-shadow-primary add-review'>
      <form onSubmit={handleSubmit} noValidate>
        <h3 className='mb-3'>Add Review</h3>
            <Input
              type={'text'}
              label={'Title'}
              name={'title'}
              placeholder={'Enter Review title'}
              value={review.title}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
            <Input
              type={'textarea'}
              label={'Comment'}
              name={'review'}
              placeholder={'Write Review'}
              value={review.review}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
            <Input
              type={'stars'}
              label={'Rating'}
              name={'rating'}
              value={review.rating}
              onInputChange={(name, value) => {
                reviewChange(name, value);
              }}
            />
            {/* <SelectOption
              error={reviewFormErrors['isRecommended']}
              label={'Will you recommend this product?'}
              name={'isRecommended'}
              value={reviewFormData.isRecommended}
              options={recommedableSelect}
              handleSelectChange={value => {
                reviewChange('isRecommended', value);
              }} */}
            {/* /> */}
        <div className='mt-4'>
          <Button type = 'submit' >
              Publish Review
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ReviewForm;