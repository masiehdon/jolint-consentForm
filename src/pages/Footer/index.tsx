import { Box, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


const Footer = () => {


  return (
    <div>
      <Grid
        container
        sx={{
          bgcolor: '#2C3386',
          color: 'white',
          textAlign: 'center',
          minWidth: '100%',
            display: { xs: 'none', sm: 'flex' },
          p: 2,
          overflowY: 'auto'
          
        }}
      >
        <Grid item sm={6} sx={{mb: 0}}>
          <Typography variant="body2" sx={{ lineHeight: 2}}>
            Jolint Network Analytics AB <br />
            Org. Nr. 559324-1770<br />
            Gothenburg, Sweden
          </Typography>
        </Grid>

        <Grid item sm={6}>
  <Typography variant="body2" sx={{ lineHeight: 2}}>
    <Box display="flex" alignItems="center" justifyContent='center' sx={{mr: 9}}>
      <LinkedInIcon />
      <Box ml={1}>Jolint</Box>
    </Box>
    <Box display="flex" alignItems="center"  justifyContent='center'>
      <MailOutlineOutlinedIcon />
      <Box ml={1}>hello@jolint.com</Box>
    </Box>
  </Typography>
</Grid>

      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        sx={{
          bgcolor: '#2C3386',
          color: 'white',
          textAlign: 'center',
          width: '100%',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
         
        }}
      >
        <Typography variant="body2" sx={{ lineHeight: 1.5}}>
          Copyright © 2023 Jolint | Powered by Jolint
        </Typography>
      </Grid>
    </div>
  );
};

export default Footer;