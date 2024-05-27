import { Box, Container, Grid, LinearProgress, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import  { linearProgressClasses } from '@mui/material/LinearProgress';

const AboutPage = () => 
  {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#FF6300' : '#308fe8',
      },
    }));    
  return (
    <Container sx={{ width:'100%',height:'90vh',display:'grid',placeItems:'center',padding:'40px'}}>
     
     <Grid container  height={'90%'}  sx={{ padding:'px'}} spacing={2}>
        
        {/* first grid-image */}
         <Grid item xs={12} md={12} lg={6} sx={{ padding:'px'}} >
            <img src={'https://i.pinimg.com/originals/95/48/61/95486188fbf36520e34fc2ec41b4523f.jpg'}
            alt='' srcSet='' width={'50%'}

          />
         </Grid>
         
        {/* second grid */}
         <Grid item xs={12} md={12} lg={6} sx={{ padding:'px'}}>
           <Typography variant='h2' align='left'>
            About Me
           </Typography>

           <Typography paragraph>
           Lorem ipsum dolor sit amet consectetur. Imperdiet convallis blandit felis ligula 
           aliquam venenatis nisi ante. Aliquet ornare tellus consectetur lacus
           </Typography>

           <Stack direction={'column'} spacing={3}>
              <Box display={'flex'} flexDirection={'column'} rowGap={2} width={'80%'}>
              <Typography align='left'>UX</Typography>
              <BorderLinearProgress variant="determinate" value={80}  />
              </Box>

              <Box display={'flex'} flexDirection={'column'} rowGap={2} width={'80%'}>
              <Typography align='left'>Website Design</Typography>
              <BorderLinearProgress variant="determinate" value={40}  />
              </Box>

              <Box display={'flex'} flexDirection={'column'} rowGap={2} width={'80%'}>
              <Typography align='left'>Mobile Design</Typography>
              <BorderLinearProgress variant="determinate" value={60}  />
              </Box>

              <Box display={'flex'} flexDirection={'column'} rowGap={2} width={'80%'}>
              <Typography align='left'>Graphic Design</Typography>
              <BorderLinearProgress variant="determinate" value={90}  />
              </Box>

           </Stack>
         </Grid>
         
     </Grid>

    </Container>

  )
}

export default AboutPage
