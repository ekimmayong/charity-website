import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

const HomeSection5 = () => {
  return (
    <Container>
        <Grid container>
            <Grid item xs={4}>
                <Typography variant='body1'>Testimonials</Typography>
                <Typography variant='h4'>What People Say About Our Company</Typography>
                <Typography variant='h6'>Trusted by more than 1800 customers</Typography>
            </Grid>
        </Grid>
    </Container>
  )
}

export default HomeSection5