import React, { Component } from 'react';
import { Nav, Navbar, Container, Image } from 'react-bootstrap';
import { FormControl, OutlinedInput, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/styles.css'

const NavBarComponent = (OriginalComponent) => {

    class NavHeader extends Component {
        nav =() => {
            return (
                <Navbar collapseOnSelect expand="lg" style={{background: 'transparent'}}>
                    <Container>
                        <Navbar.Brand href="#home" className='me-4'>
                            <Image 
                                src='images/logo-2.png'
                                height = '70px'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto h5">
                            <Nav.Link href="#features" className='px-4'>Home</Nav.Link>
                            <Nav.Link href="#pricing" className='px-4'>About</Nav.Link>
                            <Nav.Link href="#contact" className='px-4'>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                        <FormControl sx={{width: '30ch'}}>
                            <OutlinedInput 
                                placeholder='Search' 
                                sx={{
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        border: '2px solid #F86917',
                                        
                                    },
                                    borderRadius: '2rem',
                                }} 
                                size='large'
                                startAdornment={<SearchIcon />}
                            />
                        </FormControl>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar> 
            )
        }
        
        render(){
            return <OriginalComponent nav={this.nav}/>
        }
    }

    return NavHeader;
}

export default NavBarComponent