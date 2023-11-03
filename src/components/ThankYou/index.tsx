import { Avatar, Button, Grid, Typography } from "@mui/material";
// import { FcApproval } from "react-icons/fc";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

export default function ThankYou() {
  return (
      <Grid container sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', mt: '8rem' }}>
              
              <Avatar  sx={{ width: 75, height: 75, m: 5 }}>
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
          <Grid item xs={12}>
              <Typography variant="h6" sx={{m: '5rem', fontWeight: 'bolder'}}>
                  Your consent form was successfully submitted. We appreciate your collaboration. Thank you!
              </Typography>
          </Grid>
          <Grid item xs={12} sx={{mb: 15}}>
              <Button
                  variant='contained'
                  size="large"
                sx={{ background: '#2C3386', width: 175, height: 55, borderRadius: 2}}>
                  Close
              </Button>
          </Grid>
    </Grid>
  )
}
