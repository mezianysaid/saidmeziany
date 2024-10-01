import React from 'react';
import './Footer.scss'
import { Avatar, Box, Grid, Typography } from '@mui/material';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import LinkedIn from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { format } from 'date-fns';
const Footer = () => {
   // const width = screen.height
   // window.innerWidth
   // const height = screen.height
   let currentDate = format(new Date(), 'MM~do~yyyy')
   return(
<>
   <Box className='footer'  >
      <Box className="circle" >
         <Box className='footCircle'>
         <Box className='footCircle2'></Box>
         </Box>
      </Box>
      <Box className='sb_footer'>
       <Grid container pt={6}>
         <Grid item xs={12} lg={4} md={4}  className='rights'>
            <Typography className='typo'>Meziany Said :copyright ©️ {currentDate} all rights reserved</Typography>
         </Grid>
         <Grid item xs={12} lg={4} md={4}  className='info'>
            <Typography className='typo'> 📧 :mezianysaid@gmail.com</Typography>
            <Typography className='typo'> 📞 :0867654365</Typography>
         </Grid>
         <Grid item  xs={12} lg={4} md={4} className='socials'  columnGap={2}>
          <Avatar component='a'  className='icon' href='https://github.com/mezianysaid?tab=repositories' >
          <GitHubIcon color='#00f5d4' />
          </Avatar>
          <Avatar component='a'  className='icon' href='https://github.com/mezianysaid?tab=repositories'>
          <LinkedIn color='white' />
          </Avatar>
         <Avatar component='a'  className='icon' href='https://github.com/mezianysaid?tab=repositories'>
          <FacebookOutlined color='#00f5d4' />
          </Avatar>
         <Avatar component='a'  className='icon' href='https://github.com/mezianysaid?tab=repositories'>
          <InstagramIcon color='#00f5d4'/>
          </Avatar>
         <Avatar component='a'  className='icon' href='https://github.com/mezianysaid?tab=repositories'>
          <TwitterIcon color='#00f5d4' />
          </Avatar>
         </Grid>
       </Grid>

      </Box>
   </Box>
</>
);
   }

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
