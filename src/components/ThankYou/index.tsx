import { Avatar, Box, Grid, Typography } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ButtonClose from "../buttonComponents/ButtonClose";

export default function ThankYou() {
  return (
      <Box sx={{minHeigh: '100vh' }}>
          <Grid container >
              <Grid item xs={12} sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
              <Avatar  sx={{ width: 75, height: 75, }}>
              <CheckCircleOutlineOutlinedIcon sx={{fontSize: 90, backgroundColor: 'green', size: 'xx-large'}} /> 
              </Avatar> 
              
              <Typography variant="h1" sx={{
    fontWeight: 'bold',
    fontSize: {
      xs:35, 
      sm: 40, 
      md: 50,
      lg: 60,
      xl: 70, 
  }
              }}>
                  Thank You!
              </Typography>
         </Grid>
         <Grid item xs={12} sx={{alignItems: 'center', justifyContent: 'center', display: 'flex'}} >
              <Typography variant="h6" sx={{m: '5rem', fontWeight: 'bolder'}}>
                  Your consent form was successfully submitted. We appreciate your collaboration. Thank you!
              </Typography>
              </Grid>
              <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <ButtonClose /> 
</Grid>

                  
   </Grid>         
   </Box>      
 
  )
}

