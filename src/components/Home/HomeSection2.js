import React from 'react'
import { Box, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import '../../styles/styles.css'

const HomeSection2 = () => {
    const feature = [
        { id: 1, name: 'We Donate', image: 'images/feature-1.png', active: '#F86917'},
        { id: 2, name: 'Monthly Gift', image: 'images/feature-2.png', active: ''},
        { id: 3, name: 'Gift Catalog', image: 'images/feature-3.png', active: ''},
        { id: 4, name: 'We Educate', image: 'images/feature-4.png', active: ''},
    ]

    const childrenInfo = [
        {id: 1, image:'images/about-7.png', description: '20,000 poor children education empowered'},
        {id: 2, image:'images/about-8.png', description: '42,000 children lifted from poverty'},
        {id: 3, image:'images/about-9.png', description: '9,000 children healthy and nourished'},
    ]
    return (
        <Container maxWidth='xl' sx={{pt: '4rem', pb: '4rem'}}>
            <Grid container columnSpacing={2} rowGap={6}>
                <Grid item md={6}
                    sx={{
                        top: 0,
                        left: 0,
                        position:'relative',
                        height: 'inherit',
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <CardMedia
                        component='img'
                        src='images/pattern-35.png'
                        sx={{
                            bottom: 0,
                            left: 0,
                            position:'absolute',
                            width: { xs: '20rem', sm: '25', md:'30rem'}
                        }}
                    />
                    <CardMedia
                        component='img'
                        src='images/about-6 (1).png'
                        sx={{
                            bottom: 0,
                            left: 0,
                            position:'relative',
                            width:{xs: '20rem', sm: '25rem', md: '33rem'} 
                        }}
                    />
                        <Box 
                            className='satisfied-counter'
                            sx={{
                                top: {xs: 100, md:270},
                            }}>
                            <Box sx={{textAlign: 'center', color: '#fff', width: {xs: '80px',md:'120px'}}}>
                                <Typography variant='h2' sx={{fontWeight: '700', fontSize: {xs: '2.2rem', md: '4.5rem'}}}>45k</Typography>
                                <Typography variant='h6' sx={{fontSize: {xs: '.8rem', md: '1.2rem'}}}>Satisfied donors</Typography>
                            </Box>
                    </Box>
                </Grid>
                <Grid item md={6}
                    sx={{
                        pl: '3rem!important',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <Box>
                        <Typography variant='h6' color='#F86917'>ABOUT AELPA</Typography>
                        <Typography variant='h3' sx={{fontWeight: '700', fontSize: {xs: '2rem', md: 'inherit'}}}>Aelpa Make an education charity donation today</Typography>
                        <br />
                        <Typography variant='h6' sx={{fontSize: '16px', fontWeight: '500'}}>Growing up in a poverty, children face many challenges: hunger and health problems, limited access to education and medical services.Growing up in poverty children face many</Typography>
                        <hr />
                        <List sx={{
                            '& .MuiListItem-root': {
                                pt: '12px',
                                pb: '12px',
                            },
                            '& .MuiTypography-root': {
                                fontWeight: '600'
                            }
                        }}>
                            {
                                childrenInfo.map(item => {
                                    return (
                                        <React.Fragment key={item.id}>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CardMedia
                                                        component='img'
                                                        src={item.image}
                                                        sx={{
                                                            height: '35px',
                                                            width:'40px'
                                                        }}
                                                        
                                                    />
                                                </ListItemIcon>
                                                <ListItemText primary={item.description}/>
                                            </ListItem>
                                        </React.Fragment>
                                    )
                                })
                            }
                            
                            
                        </List>
                        <hr />
                        <Box sx={{display: 'flex'}}>
                            <CardMedia
                                component='img'
                                src='images/about-6.png'
                                sx={{
                                    height: '40px',
                                    width:'40px',
                                    mr: 3
                                }}
                            />
                            <Typography variant='body1'>Make an education charity donation today and give a child the opportunity for brighter future</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        className='donors-container' 
                        columnSpacing={4}
                        justifyContent='center'
                    >
                        {
                            feature.map(item => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <Grid item md={3}>
                                            <Card sx={{px:'2rem', py: '3rem'}}>
                                                <Box className='d-flex justify-content-center'>
                                                    <CardMedia
                                                        component='img'
                                                        src={item.image}
                                                        width='60'
                                                        height='60'
                                                        alt='Donate'
                                                    />
                                                </Box>
                                                <CardContent>
                                                    <Box className='d-flex justify-content-center my-3'>
                                                        <Typography variant='h5' color={`${item.active}`} sx={{fontWeight: '700'}}>{item.name}</Typography>
                                                    </Box>
                                                    <Box sx={{textAlign: 'center'}}>
                                                        <Typography variant='body1'>Vivamus in magna aclorm tellus fringilla eleifend sit</Typography>
                                                    </Box>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </React.Fragment>
                                )
                            })
                        }
                        
                    </Grid>
                </Grid> 
                
            </Grid>
        </Container>
    )
}

export default HomeSection2