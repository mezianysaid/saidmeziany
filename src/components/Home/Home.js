import React from 'react';

import './Home.scss'
import { Box,Typography ,Grid ,Button} from '@mui/material';
import bg from '../../assets/Images/bg.png'
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import LinkedIn from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FeedIcon from '@mui/icons-material/Feed';
import resume from '../../assets/Images/cv.pdf'
const Home = ({width,height}) => {
   // const Navigate = useNavigate()
   
   return(

<>
   <Box className='header'>  

      <Box className='introduction'>
      <Grid container  mt={0}>
               <Grid item xs={12} md={6} lg={6} sx={{flex:1}}>   
               <Box className='welcome'>
               <Typography className='title'>Hi, I'm Meziany Saïd  </Typography> 
               <Box className='wrapperContanet'>
                  
               <Typography variant='h4' className='content'>
               I'm Full Stack developer, I create websites, web applications and Mobile applications for small businesses. I help build websites and web apps for people all over the world.
               </Typography>
               </Box>                               

               </Box>    

                  <Box className='btns'  spacing={2}>

                       
                        <Button  className='btn' variant='contained' title='LinkedIn' href='https://github.com/mezianysaid?tab=repositories' target='_blank' >
                        <LinkedIn color='white' />
                        </Button>
                        <Button  className='btn' variant='contained' title='GitHub' href='https://github.com/mezianysaid?tab=repositories' target='_blank'>
                        <GitHubIcon color='white' />
                        </Button>
                        <Button  className='btn' variant='contained'  title='Facebook'  href='https://www.facebook.com/profile.php?id=100055833765220 ' target='_blank'>
                        <FacebookOutlined color='white' />
                        </Button>
                        <Button  className='btn' variant='contained' title='Instagram' href='https://www.instagram.com/said_meziany/' target='_blank'>
                        <InstagramIcon color='white' />
                        </Button>
                        <Button  className='btn' variant='contained' title='Twitter'href='https://github.com/mezianysaid?tab=repositories' target='_blank' >
                        <TwitterIcon color='white' />
                        </Button>
                       
                        <Button  className='btn' download='resume' variant='contained' title='CV' href={resume}>
                        <FeedIcon color='white' />
                        </Button>
                        {/* <Card sx={{width:50,height:50,backgroundColor:'black',borderRadius:"50%"}}></Card> */}
                        {/* <Card sx={{width:50,height:50,backgroundColor:'black',borderRadius:"50%"}}></Card> */}
                  </Box>           
               </Grid>
               <Grid item xs="none" md={6} lg={6}>                                       
                  <img className='img1'  src={bg} alt='img' width="95%" height={height-90} />                 
               </Grid>               
             
      </Grid>    
      </Box>

   </Box>
   

</>
);
   }

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
