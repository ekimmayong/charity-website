import React from 'react';
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import ReactSlider from 'react-slider';

const HomeSection4 = () => {
  return (
    <Container>
        <Grid container>
            <Grid item xs={6}>
                <CardMedia
                    component='img'
                    src='images/skill.png'
                    sx={{
                        width: '450px'
                    }}
                />
            </Grid>
            <Grid item xs={6} padding='24px'>
                <Box sx={{mb:'45px'}}>
                    <Typography variant='body1' sx={{mb: '20px', color: '#F86917'}}>JOIN US NOW</Typography>
                    <Typography variant='h4' sx={{mb: '20px'}}>Building a better world <br /> for and with children</Typography>
                    <Typography variant='body1' sx={{mt: '20px'}}>We improve the health of the children and families so children np longer die of preventable illlnesses and live past their fift birthday Lore ipsum dolor sit amet</Typography>
                </Box>
                <Box component='div'>
                    <Box sx={{mb: '12px'}}>
                        <Typography variant='h6' sx={{mb: '12px'}}>Case Success</Typography>
                        <ReactSlider 
                            className='horizontal-slider-round'
                            thumbClassName="example-thumb-round"
                            trackClassName="example-track-round"
                            defaultValue={75}
                            renderThumb={(props, state) => <div {...props} ><span className='thumb-mark'>{state.value}%</span></div>}
                        />
                    </Box>
                    <Box sx={{mb: '45px'}}>
                        <Typography variant='h6' sx={{mb: '12px'}}>Humanity</Typography>
                        <ReactSlider 
                            className='horizontal-slider-round'
                            thumbClassName="example-thumb-round"
                            trackClassName="example-track-round"
                            defaultValue={90}
                            renderThumb={(props, state) => <div {...props} ><span className='thumb-mark'>{state.value}%</span></div>}
                        />
                    </Box>
                    <Button variant='outlined' color='orange' className='button-one'>JOIN US NOW</Button>
                </Box>
                
            </Grid>
            <Grid item xs={12} sx={{mt: '6rem', position: 'relative'}}>
                <Box className='work-together'>
                    <Box>
                        <Typography variant='h4' sx={{mb: '24px'}}>Let us work together to make a difference</Typography>
                        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur elit. Nam henderit nisi sed solicitudim</Typography>
                    </Box>
                    <Box>
                        <Button variant='outlined' color='orange' className='button-one'>VOLUNTEER</Button>
                    </Box>
                </Box>
                <Box className='work-together-outline'></Box>
            </Grid>
        </Grid>
    </Container>
  )
}

export default HomeSection4