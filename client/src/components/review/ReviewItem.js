import { Box, Grid, Avatar, Rating, Typography } from "@mui/material"

const ReviewItem = ({ review}) =>{
    const { title, user, userImage, comment, rating, updatedAt }  = review
    const date = new Date(updatedAt);

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return <>
        <div>
            <Grid container sx = {{  p: 2}}>
                <Grid
                    sx = {{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    item 
                    xs = { 2 }>
                    <Avatar 
                        sx = {{ height: '60px', width: '60px'}} 
                        src = { userImage }></Avatar>
                </Grid>
                <Grid item xs = { 10 }>
                    <Box sx = {{ display: 'flex'}} >
                        <Typography component = 'h3' variant = 'h5'>{title}</Typography>
                        
                        <Rating 
                                readOnly
                                value = { rating }
                                sx = {{ ml: 'auto',
                                        alignSelf: 'center'}}
                        />

                    </Box>
                    <Typography varient = 'h6' sx = {{ my: 1, pr: 4}} >{formattedDate}</Typography>
                    <Typography varaont = 'p' sx = {{ mb: 2, pr: 4}}>{comment}</Typography>
                </Grid>
            </Grid>
        </div>
    </>
}

export default ReviewItem