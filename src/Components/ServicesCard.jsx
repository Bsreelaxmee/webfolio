import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import image1 from "../assets/icon.png"

const ServicesCard = (props) =>
   {
    const { image, title, description} = props
  return (
    <Card sx={{width:'250px',height:'270px',padding:'10px'}}>
      <CardMedia sx={{height:'36%',textAlign:'left'}}>
        <img src={image} alt="" width={40} height={80} style={{ padding:'10px'}}/>
        </CardMedia>

        <CardContent>
          <Typography fontSize={28} align='left'>{title}</Typography>
          <Typography fontSize={16} align='left'>{description}</Typography>
        </CardContent>

    </Card>
  )
}

export default ServicesCard
