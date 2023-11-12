import { Avatar, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import intro from '../../assets/intro.png'
import yourRights from '../../assets/your-rights.png'
import purpose from '../../assets/purpose.png'
import consent from '../../assets/consent2.png'
import CustomCheckbox1 from '../CustomCheckbox1';
import CustomCheckbox2 from '../CustomCheckbox2';



interface BoxesProps {
  sectionId: number;
  handleClickBox: (e: React.MouseEvent) => void;
  
}

const Boxes: React.FC<BoxesProps> = ({ sectionId, handleClickBox }) => {
  
      
    return (
      // <Box sx={{ width: '100', mr: 2, align: 'center', overflowX: 'hidden'}}>
            <Grid container spacing={2} sx={{p: 1, justifyContent: 'center, '}}>
                
          <Grid item xs={12} sm={6} md={6} lg={3} sx={{direction: "column", display: 'flex'}}>
            <Box
              id='1'
              onClick={handleClickBox}
             sx={{
          width: '25rem',
          minHeight: '20rem',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
                justifyContent: 'space-between',
                      m: 2,
               p: 2,
                      borderRadius: 3,
          boxShadow: 10
                        }}>
                        <Box sx={{position: 'relative' }}>
                        <Avatar>
                                <img src={intro} />
                        </Avatar>      
                        </Box>
                        <Box sx={{ mt: 5}}>
              <Typography variant='h4'sx={{align: 'center', mt: 5}} >
              Introduction
                            </Typography>
                            <Typography variant='body2' sx={{align: 'center', mt: 10}}>
                                Let jolint introduce themselves to you
                            </Typography>
                      </Box>
                        <Box sx={{position: 'relative', left: -2 }}>
                         {sectionId &&  sectionId >= 2 ? <CustomCheckbox1 /> : <CustomCheckbox2 />} 
                        </Box> 
              </Box>
                </Grid>
                
          <Grid item xs={12} sm={6} md={6} lg={3} sx={{direction: "column", display: 'flex'}}>
            <Box
              id='4'
              onClick={handleClickBox}
             sx={{
          width: '25rem',
          minHeight: '20rem',
          backgroundColor: sectionId && sectionId >= 2? 'none' : '#EDEDED',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          m: 2,
               p: 2,
                      borderRadius: 3,
               boxShadow: 10,
                 
                
                        }}>
                        
                         <Box sx={{position: 'relative', left: -10 }}>
                        <Avatar>
                                <img src={purpose}
                                alt="Purpose"
                                    style={{ filter: sectionId &&  sectionId <= 3 ? 'grayscale(100%)' : 'none' }}
                                />
                        </Avatar>      
                        </Box>

              <Box sx={{ mt: 5}}>
              <Typography variant='h4'sx={{align: 'center', mt: 5}} >
              Purpose
                            </Typography>
                            <Typography variant='body2' sx={{align: 'center', mt: 10}}>
                                The purpose of having Jolint in your company
                            </Typography>
                      </Box>
                        
                    
                     <Box sx={{position: 'relative',  }}>
                           {sectionId &&  sectionId >= 3 ? <CustomCheckbox1 /> : <CustomCheckbox2 />}
                        </Box> 
                    </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} sx={{direction: "column", display: 'flex'}}>
            <Box
              id='6'
             onClick={handleClickBox}
              sx={{
          width: '25rem',
          minHeight: '20rem',
          backgroundColor: sectionId && sectionId >= 3 ? 'none' : '#EDEDED',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
                p: 2,
                      borderRadius: 3,
          boxShadow: 10
                       
                        }}>
                        
                         <Box sx={{position: 'relative', left: -10}}>
                        <Avatar>
                                <img src={yourRights}
                                style={{ filter: sectionId &&  sectionId <= 2 ? 'grayscale(100%)' : 'none' }}
                                />
                        </Avatar>      
                        </Box>

               <Box sx={{ mt: 5}}>
              <Typography variant='h4'sx={{align: 'center', mt: 5}} >
              Your Rights
                            </Typography>
                            <Typography variant='body2' sx={{align: 'center', mt: 10}}>
                                Your rights with the processing of your personal data
                            </Typography>
                      </Box>
                        
                        <Box sx={{position: 'relative',  }}>
                           {sectionId &&  sectionId >= 4 ? <CustomCheckbox1 /> : <CustomCheckbox2 />}
                        </Box> 
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} sx={{direction: "column", display: 'flex'}}>
            <Box
              id='10'
             onClick={handleClickBox}
             sx={{
           width: '25rem',
          minHeight: '20rem',
          backgroundColor: sectionId && sectionId >= 4 ? 'none' : '#EDEDED',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
               p: 2,
               borderRadius: 3,
          boxShadow: 10
          
                        }}>
                        
                         <Box sx={{position: 'relative', left: -10 }}>
                        <Avatar>
                                <img src={consent}
                                style={{ filter: sectionId &&  sectionId <= 3 ? 'grayscale(100%)' : 'none' }}
                                />
                        </Avatar>      
                        </Box>

             <Box sx={{ mt: 5}}>
              <Typography variant='h4'sx={{align: 'center', mt: 5}} >
              Consent
                            </Typography>
                            <Typography variant='body2' sx={{align: 'center', mt: 10}}>
                                Sign to improve inclusion and belonging in your company
                            </Typography>
                      </Box>


                        <Box sx={{position: 'relative',  }}>
                           {sectionId &&  sectionId >= 5 ? <CustomCheckbox1 /> : <CustomCheckbox2 />}
                        </Box> 
              </Box>
              </Grid>
            </Grid>
            // </Box>
  )
}

export default Boxes;