import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ServicesCard from '../Components/ServicesCard'
import image1 from '../assets/icon.png'
import image2 from '../assets/icon (1).png'
import image3 from '../assets/icon (2).png'
import image4 from '../assets/icon (1).png'
 

const ServicesPage = () => {
  return (
    <Container sx={{ width:'100%',height:'90vh',display:'grid',placeItems:'center',padding:'40px'}}>
        {/* box1 */}
       <Box>
       <Typography variant='h2' align='center'>
            Services
          </Typography>

          <Typography paragraph fontSize={21}>
          Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula <br/>
           aliquam venenatis fghh hgjj nisi ante.
          </Typography>

       </Box>
        
        {/* box2 */}
      {/* <Box> */}
        <Grid container >

        <Grid item xs={12} md={6} lg={3} sx={ { padding:'10px'}} >
        <ServicesCard image={image1} title={'UI/UX'} description= {"Lorem ipsum dolor sit amet consectetur.Tristique amet sed massa nibh"}/>
        </Grid>

        <Grid item xs={12} md={6} lg={3} sx={ { padding:'10px'}} >
        <ServicesCard image={image2} title={'Web Design'} description= {"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"}/>
        </Grid>

        <Grid item xs={12} md={6} lg={3} sx={ { padding:'10px'}} >
        <ServicesCard image={image3} title={'App Design'} description= {"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"}/>
        </Grid>

        <Grid item xs={12} md={6} lg={3} sx={ { padding:'10px'}} >
        <ServicesCard image={image4} title={'Graphic Design'} description= {"Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh"}/>
        </Grid>
          
          </Grid> 
      {/* </Box> */}




    </Container>
  )
}

export default ServicesPage
