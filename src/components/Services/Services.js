import React from 'react';
import './Sercstyles.scss'
import im1 from '../../assets/Images/p3.jpg'
import { css,html,ex,reac,red,rjx,tf,sass,scikit,boot,jj,python,tw,monfo,kears,open,node,php} from '../index'
import { Box,Grid,Card, CardContent, Typography } from '@mui/material';

const Services = ({_services}) => (
<Box>
<Box sx={{height:130}}>
      <svg viewBox="0 0 500 200">
      <path d="M 0 30 C 150 100 280 0 500 20 L 500 0 L 0 0" fill="#012a4a"></path>
      </svg>
</Box>
<Box component='div' m={10}>
       <Grid container>
         <Grid item lg={4} md={4} display={{xs:"none", md:"flex",lg:"flex"}} mt={{ xs:0, md:7,lg:7}}>
            <img src={im1} alt='img1' width="100%" height={400} style={{borderRadius:20,}} />
         </Grid>
         <Grid item lg={8} md={8} xs={12}>

        
         {_services.map((item)=>(

         <Card  key={item.title} className='cardP' sx={{margin:1, justifyContent:'space-between',flexDirection:'row',borderTopRightRadius:20,borderBottomLeftRadius:20}} >
               <Box className='circleTool'></Box>                             
                                          <CardContent>
                                             <Typography sx={{fontWeight:700,fontSize:20,marginLeft:4,color:'#012a4a'}}>
                                                {item.title}
                                             </Typography>
                                          </CardContent>                                   
                                                                                                                                   
         </Card>  
                                    
         ))}
          </Grid>
       </Grid>

       
      </Box>

    <Box m={10} className='tools'  >
      <Grid container>         
      {([html,css,ex,reac,node,php,boot,jj,python,tw,monfo,red,rjx,tf,sass,scikit,kears,open]).map((item)=>(
         <Grid key={item} item lg={1} md={1} xs={3}>
      <Card className='tool' >   
                    <img src={item} height={70} alt={item} className='image' />
      </Card>
      </Grid>
      ))}
       
      </Grid>
    
    
    </Box>

</Box>
);

Services.propTypes = {};

Services.defaultProps = {};

export default Services;
