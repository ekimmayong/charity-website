import React, { Component } from 'react';
import NavBarComponent from '../NavBar';
import { Box, Button, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from '@mui/material';
import { Parallax } from 'react-parallax'
import HomeSection2 from './HomeSection2';
import HomeSection3 from './HomeSection3';
import HomeSection4 from './HomeSection4';
import HomeSection5 from './HomeSection5';

class Home extends Component {

    
    render(){
        const { nav: Nav } = this.props;
        
        return (
            <>
                <Grid container>
                    <Grid item xs={12}>
                        <Parallax bgImage='images/image-3.jpg'>
                            <Container maxWidth='xl' sx={{pb: '18px'}}>
                                <Nav />
                                <Box>
                                    <Grid container >
                                        <Grid item md={5} 
                                            sx={{
                                                top: 0,
                                                left: 0,
                                                position:'relative',
                                                height: 'inherit'
                                            }}
                                        >
                                            <CardMedia 
                                                component='img'
                                                src='images/shape-17.png'
                                                sx={{
                                                    bottom: 0,
                                                    left: 0,
                                                    position:'absolute',
                                                    width: {xs: '15rem',md:'20rem'}
                                                }}
                                                alt='Donate'
                                            />
                                            <CardMedia
                                                component='img'
                                                src='images/content-image-6.png'
                                                sx={{
                                                    top: 0,
                                                    left: 0,
                                                    position: 'relative'
                                                }}
                                                alt='Donate'
                                            />
                                            
                                        </Grid>
                                        <Grid item md={7} sx={{pt: '6rem'}}>
                                            <Box className='home-message'>
                                                <Typography variant='body1' sx={{color:'#F86917'}}>Give Education</Typography>
                                                <Typography variant='h2' sx={{color:'#FFF', fontWeight: '700', fontSize: '5.25rem'}}>Give a child the gift of Education</Typography>
                                                <Typography variant='h6' sx={{color:'#FFF'}}>Each donation is an essential help for everyone's life</Typography>
                                                <Box paddingTop={5}>
                                                    <Button 
                                                        type='button' 
                                                        color='cool'
                                                        variant='contained' 
                                                        className='btn-style-two'
                                                    >
                                                            Donate now
                                                    </Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Container>
                        </Parallax>
                    </Grid>
                    <Grid item md={12}>
                        <HomeSection2 />
                    </Grid>
                    <Grid item xs={12} sx={{bgcolor: '#FDF4ED',pt: 12, pb: 8}}>
                       <HomeSection3 />
                    </Grid>
                    <Grid item xs={12} sx={{padding: '110px 0px 0px'}}>
                        <HomeSection4 />
                    </Grid>
                    <Grid item xs={12} sx={{bgcolor: '#FAEBE4', py: 8}}>
                        <HomeSection5 />
                    </Grid>
                </Grid>
            </>
        )
    }
  
}

export default NavBarComponent(Home)