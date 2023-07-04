import { Grid } from "@mui/material";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";

const Review = ( {reviews} ) =>{
    console.log( reviews. length)
    return <>
        <Grid container >
            <Grid item xs = { 6 }>
                {/* ony display the review if its defined and the length of the array is more than 0  */}
                {(reviews || !(reviews?.length)) &&  reviews?.map( review => <ReviewItem review = { review} keu = { review._id} /> )}
                { (!reviews || !(reviews?.length)) && < div> No Reviewws to display</div> }
            </Grid>
            <Grid item  xs = { 6 } >
                <ReviewForm />
            </Grid>
        </Grid>
    </>
}

export default Review