import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box, Typography } from '@mui/material'


const Footer = () => {
  return (
    <>
  <Box sx={{textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 3}}>
    <Box sx={{
        my: 3,
        "& svg":{
            fontSize: "60px",
            cursor: "pointer",
            mr: 2,
        },
        "& svg: hover":{
          color: 'orange',
          transform: 'translateX(5px)',
          transition: 'all 400ms'
        }

    }}>
<InstagramIcon/>
<TwitterIcon/>
<YouTubeIcon/>
<WhatsAppIcon/>
    </Box>
    <Typography variant='h5' sx={{"@media (max-widht: 600px)":{
        fontSize: "1rem"
    },
    }}>
        All Rights Reserved &copy; Marhaba Resturant
    </Typography>
  </Box>
    </>
  )
}

export default Footer
