import { Grid } from "@mui/material";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";

const Review = ( {reviews} ) =>{
    console.log( reviews )
    return <>
        <Grid container >
            <Grid item xs = { 6 }>
                {reviews &&  reviews.map( review => <ReviewItem review = { review} /> )}
                { !reviews && < div> No Reviewws to display</div> }
            </Grid>
            <Grid item  xs = { 6 } >
                <ReviewForm />
            </Grid>
        </Grid>
    </>
}

export default Review