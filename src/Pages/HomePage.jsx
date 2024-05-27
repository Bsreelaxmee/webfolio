import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <Container sx={{display:'flex',justifyContent:'space-between',padding:'120px'}}>
       {/* box one */}
         <Box width={'50%'} padding={4} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
            <Typography sx={{ fontWeight:'bold',fontSize:'24px'}} align='left'>Hi I am</Typography>

            <Typography align='left' color={'#FF6300'} sx={{ fontWeight:'bold',fontSize:'32px'}} >Berelle SreeLaxmee</Typography>

            <Typography variant='h1' fontSize={'80px'} align='left'>UI & UX</Typography>

            <Typography variant='h1' fontSize={'80px'} align='center'>Designer</Typography>

            <Typography paragraph align='left' mt={'10px'}>Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula 
              aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus</Typography>

              <Button variant='contained' size='small'  sx={{ width:'20%'}} >Hire me</Button>

             </Box>
         {/* box two*/}

        <Box width={'50%'} sx={{ display:'grid',placeItems:'center'}}>
          <img 
                
                src={'https://i.pinimg.com/originals/95/48/61/95486188fbf36520e34fc2ec41b4523f.jpg'}
                
                alt={'img'}
                loading="lazy"
                width='48%'
          
          />
        </Box>
    </Container>
  )
}

export default HomePage
