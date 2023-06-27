const randomReview = {
    name: 'John Doe',
    date: '12/12/2020',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ve',
    rating: 4
}

const Review = ({review }) =>{
    return (
        <div className="review flex">
            <div className = 'rounded-full w-24'>

            </div>
            <eiv className = ''>
                <div>
                    <h3>{review.name}</h3>
                    <p>{review.date}</p>
                    <p>{ review.conent}</p>
                </div>
                <div className = 'review-star'>
                </div> 
            </eiv>
        </div>
    )
}

export default Review