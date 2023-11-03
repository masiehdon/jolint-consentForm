import { Box, Grid } from "@mui/material";
import logo from '../../assets/logo.svg'
// import DarkMode from "../../theme/DarkMode";


export default function Header() {

  
  return (
    <Grid container sx={{width: 1, height: '6rem', boxShadow: 1, margin: '0'}}>
      <Grid item sx={{ ml: 2, display: 'flex' }}>
    <Box>
          <img src={logo} alt="jolint" style={{ margin: '2rem' }} />
      </Box>    
      </Grid>
      <Grid item sx={{ mr: 2, display: 'flex' }}>
        <Box>
        {/* <DarkMode /> */}
        </Box>
      </Grid>
      </Grid>
  )
}
