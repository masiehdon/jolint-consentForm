import { Grid, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        sx={{
          bgcolor: '#2C3386',
          color: 'white',
          textAlign: 'center',
          position: 'fixed',
          bottom: 0,
          width: '100%',
            display: { xs: 'none', sm: 'flex' },
          p: 2
        }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ lineHeight: 2}}>
            Jolint Network Analytics AB <br />
            Org. Nr. 559324-1770<br />
            Gothenburg, Sweden
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ lineHeight: 2}}>
            <LinkedInIcon /> Jolint <br />
            <MailOutlineOutlinedIcon /> hello@jolint.com
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
          position: 'fixed',
          bottom: 0,
          width: '100%',
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'center',
          py: 1,
        }}
      >
        <Typography variant="body2">
          Copyright © 2023 Jolint | Powered by Jolint
        </Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
