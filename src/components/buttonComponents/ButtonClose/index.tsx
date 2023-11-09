import { Button, Grid } from "@mui/material";


export default function index() {
  
  return (
       <Grid item xs={12} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
              <Button
                  variant='contained'
                  size="large"
                sx={{ background: '#2C3386', width: 175, height: 55, borderRadius: 2}}>
                  Close 
              </Button>
          </Grid>
  )
}
