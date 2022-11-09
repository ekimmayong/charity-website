import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Grid, Slider, Typography } from '@mui/material';
import ReactSlider from 'react-slider'

const HomeSection3 = () => {
    const featureCause = [
        {id: 1, name: 'Education', image: 'images/cause-8.jpg', description: 'A more tailored and cost effective donor journey', bgcolor: '#13C5D0'},
        {id: 2, name: 'Donation', image: 'images/cause-9.jpg', description: 'Give education for homeless Poor Children', bgcolor: '#FF9F00'},
        {id: 3, name: 'Programs', image: 'images/cause-10.jpg', description: 'Give Education for homeless Poor Children', bgcolor: '#4CE9AD'},
        {id: 4, name: 'Food', image: 'images/cause-7.jpg', description: 'Street 100 million children homelessness', bgcolor: '#EC4A4E'},
    ]
    return (
        <Container maxWidth='xl'>
            <Grid container>
                <Grid item xs={12} sx={{textAlign: 'center', mb:'45px'}}>
                    <Typography variant='h6' sx={{fontSize: {xs: '12px', md: '16px'}}}>FEATURE CAUSES</Typography>
                    <Box >
                        <Typography variant='h4' sx={{fontWeight: '700', fontSize:{xs: '22px', md: '46px'}}}>Most of the Poor rural children
                        <br />
                        our future companies
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} paddingTop='20px'>
                    <Grid container columnSpacing={4} rowSpacing={{xs: 4, md: 0}}>
                        {
                            featureCause.map(item => {
                                return (
                                    <React.Fragment key={item.id}>
                                         <Grid item md={3}>
                                            <Card sx={{
                                                    borderRadius: 0,
                                                    boxShadow: 'none'
                                                }}
                                            >
                                                <CardMedia
                                                    component='img'
                                                    src={item.image}
                                                    sx={{
                                                        borderRadius: 0
                                                    }}
                                                />
                                                <CardContent
                                                    sx={{
                                                        position: 'relative',
                                                        padding: '0px 28px 35px'
                                                    }}
                                                >
                                                    <Box 
                                                        component='div'
                                                        className='feature-category'
                                                        sx={{
                                                            bgcolor: `${item.bgcolor}`,
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Box>
                                                    <Typography variant='body1' sx={{fontWeight: '700', mt: '1rem', lineHeight: '1.3em'}}>{item.description}</Typography>
                                                    <Box component='div' className='amount-donated'>
                                                        <Box 
                                                            conponent='div' 
                                                            sx={{
                                                                mb: '20px', 
                                                                textAlign: 'center',
                                                                 display: 'flex', 
                                                                 justifyContent: 'space-between', 
                                                                 alignItems: 'center'}}
                                                            >
                                                            <Typography variant='body2'><strong>$1,200.00</strong> Raised</Typography> |
                                                            <Typography variant='body2'><strong>$4,000.00</strong> goal</Typography>
                                                        </Box>
                                                        <Box sx={{bgcolor: '#fff', height: '20px'}}>
                                                            <ReactSlider 
                                                                className='horizontal-slider'
                                                                thumbClassName="example-thumb"
                                                                trackClassName="example-track"
                                                                defaultValue={60}
                                                                renderThumb={(props, state) => <div {...props}>{state.value}%</div>}
                                                            />
                                                        </Box>
                                                    </Box>
                                                    <Box component='div' sx={{mt: '30px'}}>
                                                        <Typography variant='body2'>Lot of fun lorem Ipsum is simply dummy of the printing and typetesting industry</Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </React.Fragment>
                                )}
                            )
                        }
                        <Grid item 
                            xs={12} 
                            sx={{
                                mt:'40px',
                                display: 'inline-flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Box sx={{
                                width: '30px',
                                height: '6px',
                                borderRadius: '3px',
                                bgcolor: '#FD6711',
                                mr: '2px'
                            }}>
                                <span></span>
                            </Box>
                            <Box sx={{
                                width: '6px',
                                height: '6px',
                                borderRadius: '50%',
                                bgcolor: '#ccc'
                            }}>
                                <span></span>
                            </Box>
                       </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomeSection3