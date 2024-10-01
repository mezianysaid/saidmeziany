import React from 'react';
import './About.scss'
import { Box, Typography ,Grid, Card} from '@mui/material';

const AboutUs = () => (
 <Box className='about'>
   <Box className='bottom'>
      <svg viewBox="0 0 500 200">
      <path d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0" fill="#012a4a"></path>
      </svg>
   </Box>
   <Grid container sx={{justifyContent:'center'}}>

   <Grid xs={12}  md={8} lg={10} className='wrapper'>

         <Card sx={{padding:2,borderTopRightRadius:40,borderBottomLeftRadius:40}}> 
            <Box>
               <Typography>
            🚀 Experienced Full Stack MERN Developer Ready to Elevate Your Project 🚀.</Typography>

         <Typography>👋 Hi there! I' am Meziany Saïd , a passionate Full Stack MERN Developer with over 1 years of experience, and I've had the privilege of working on some projects. If you're looking to take your web development project to the next level, you've come to the right place!</Typography>
         <Typography variant='h6'>🔧 What I Bring to the Table:</Typography>
         <Box ml={10}>

         <Typography>✅ Expertise in MERN (MongoDB, Express.js, React.js, Node.js, React Native) stack</Typography>
         <Typography>✅ Proven track record in creating high-performance, scalable, and user-friendly web applications and Mobile applications</Typography>
         <Typography>✅ Strong problem-solving skills and a keen eye for details</Typography>
         <Typography>✅ A passion for staying up-to-date with the latest industry trends and technologies</Typography>
         <Typography>✅ Exceptional communication and collaboration skills</Typography>
         </Box>
         <Typography variant='h6'>💡 Services I Offer:</Typography>
         <Box ml={10}>
         <Typography>🌐 Custom Web Application Development</Typography>
         <Typography>🎨 Responsive and Elegant User Interfaces</Typography>
         <Typography>📱 Custom Mobile Application Development</Typography>
         <Typography>🛠 API Integration and Third-Party Services</Typography>
         <Typography>🚀 Performance Optimization</Typography>
         </Box>

         <Typography>💬 Let's Chat! Whether you're a startup looking to bring your vision to life or an established company seeking to enhance your online presence, I'm here to help. I'm a firm believer in delivering results that exceed expectations, on time and within budget.</Typography>

         <Typography>💼 Ready to discuss your project? Feel free to message me</Typography>

         <Typography>🌟 Let's turn your ideas into reality! 🌟</Typography>


            </Box>
            </Card>  
   </Grid>
   </Grid>

 </Box>
);

AboutUs.propTypes = {};

AboutUs.defaultProps = {};

export default AboutUs;



