import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
     <Box sx={{my: 9, ml: 10, textDecoration: 'underline', "&h4":{fontWeight: 'Bold', mb: 2}}}>
<Typography variant='h4'>
  Contact Here

</Typography>
<p>
At Marhaba Restaurant, we value your feedback and are here to assist you. Whether you have questions, need assistance with<br></br> a reservation, or want to share your dining experience, our team is just a call or message away.
</p>
     </Box>
     <Box sx={{m: 3,width: '600px', "@media (max-width:600px)":{
      width: '300px',
     }}}>
      <TableContainer  component={Paper}>
  <Table aria-label='contact table'>
<TableHead>
  <TableRow>
    <TableCell sx={{bgcolor: 'black', color: 'orange',}} align='center'>
      Contact Details
    </TableCell>
  </TableRow>
</TableHead>
<TableBody>
  <TableRow>
    <TableCell>
      <SupportAgentIcon sx={{color: 'red', pt: 1}} /> 12345678909 (toll free)
    </TableCell>
    
  </TableRow>
  <TableRow>
    <TableCell>
      <EmailIcon sx={{color: 'blue', pt: 1}} />help @Marhabaresturant.com
    </TableCell>
    </TableRow>
    <TableRow>
    <TableCell>
      <CallIcon sx={{color: 'green', pt: 1}} />+92-12345698
    </TableCell>
    </TableRow>
</TableBody>
        </Table>
      </TableContainer>
     </Box>
    </Layout>
  )
}

export default Contact
