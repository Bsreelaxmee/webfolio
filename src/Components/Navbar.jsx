import { Button, Container, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
   // <div>
   // <Container sx={{ paddingTop:'30px',display:'flex',alignItems:'center'}}>
     //   <Typography>MY BIO</Typography>
         
       //  <Stack direction={'row'} ml={50} mr={3}>
         // <ListItem>Home</ListItem>
         // <ListItem>About</ListItem>
          //<ListItem>Services</ListItem>
         // <ListItem>Testimonials</ListItem>
         // <ListItem>ContactUs</ListItem>

        // </Stack>
        // <Button variant='contained' size='small' color="success">Download CV</Button>
     // </Container>
   // </div>


         <Container sx={{ width:'100%',height:'12vh',display:'flex',alignItems:'center'}}>
            <Typography>MY BIO</Typography>
         
          <Stack direction={'row'} ml={50} mr={3}>
            <ListItem>Home</ListItem>
            <ListItem>About</ListItem>
            <ListItem>Services</ListItem>
            <ListItem>Testimonials</ListItem>
            <ListItem>ContactUs</ListItem>
  
          </Stack>
              <Button variant='contained' size='small' color="success">Download CV</Button>
         </Container>



  )
}

export default Navbar
