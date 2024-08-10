import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material'

const about = () => {
  return (
    <Layout>
        <Box
        sx={{my: 15,
       textAlign: 'center',
       P: 2,
       "& h4":{
        fontWeight: 'bold',
        my: 2,
        fontSize: '2rem',
       } ,
      
       "@media (max-width:600px)":{
        mt: 0,
       },
       }}>
<Typography variant='h4'>Welcome to Marhaba Point </Typography>
<p>
At Marhaba, we believe that food is not just a necessity but an experience that brings people together. Established with the passion to serve 
<br></br>
authentic and flavorful dishes, our restaurant offers a journey through the rich culinary traditions of [insert specific cuisine, e.g., Middle Eastern, Indian, etc.].

</p>
<br></br>
<p>
Our chefs use only the freshest ingredients to prepare a wide variety of dishes, each crafted with care and love.<br></br> From our aromatic biryanis and succulent kebabs to our fresh salads and delightful desserts, every meal at Marhaba is a celebration of taste.
Whether you're here<br></br> for a family dinner, a special occasion, or just a quick bite, we aim to provide a warm and inviting atmosphere where you can relax and enjoy the best that [insert specific cuisine] has to offer.
  <h3>our mission</h3>
  Our Mission
To serve high-quality, authentic cuisine in a friendly and welcoming environment. We strive to make every visit memorable with our exceptional service and delicious food.
</p>
        </Box>
    </Layout>
  )
}

export default about