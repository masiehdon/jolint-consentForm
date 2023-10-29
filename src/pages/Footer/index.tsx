import { Grid, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


const bgColor = '#2C3386'

export default function Footer() {
    return (
     <footer>
      
            <Grid container sx={{ background: bgColor, color: 'white', textAlign: 'center', position: 'absolute', bottom: 0, padding: 3, alignItems: 'center'  }}>
              <Grid item xs={4} sx={{display: 'inline', textAlign: 'right',}}>
                  <Typography variant="body2" sx={{ lineHeight: 2, mr: 35}}>
                     Jolint Network Analytics AB <br/>Org. Nr. 559324-1770<br/> Gothenburg, Sweden 
                  </Typography>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center'}}>
                  <Typography variant="body2">
                     Copyright © 2023 Jolint | Powered by Jolint
 
                  </Typography>
              </Grid>
                <Grid item xs={4} sx={{textAlign: 'left', alignContent: 'center'}}>
                    
                  <Typography variant="body2" sx={{lineHeight: 2, ml: 35}}>
                     <LinkedInIcon/> Jolint <br/><MailOutlineOutlinedIcon /> hello@jolint.com
                  </Typography>
              </Grid>
         
          </Grid>
              
       </footer>
  )
}
