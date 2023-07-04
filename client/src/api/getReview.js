const getReview = async( { params} ) =>{
    const review = await fetch(`http://localhost:5000/getreview/${params.id}`)
    const jsonReview = await review.json()
    const returnValue = jsonReview.payload
    return returnValue
}

export default getReview