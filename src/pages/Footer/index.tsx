import { Grid, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';


const bgColor = '#2C3386'

export default function Footer() {
    return (
     <footer>
    
            <Grid container sx={{ background: bgColor, color: 'white', textAlign: 'center', position: 'absolute', bottom: 0, alignItems: 'center', minWidth: '100vw', display: { xs: 'none', sm: 'flex' } }}>
              <Grid item  md={6} sx={{textAlign: 'right', mt:2}}>
                  <Typography variant="body2" sx={{ lineHeight: 2, mr: 60}}>
                     Jolint Network Analytics AB <br/>Org. Nr. 559324-1770<br/> Gothenburg, Sweden 
                  </Typography>
                </Grid>
                
                <Grid item md={6}  sx={{textAlign: 'left',  mt:2}}>
                    
                  <Typography variant="body2" sx={{lineHeight: 2, ml: 60, }}>
                     <LinkedInIcon/> Jolint <br/><MailOutlineOutlinedIcon /> hello@jolint.com
                  </Typography>
              </Grid>
         <Grid item  md={12} sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
                  <Typography variant="body2">
                     Copyright © 2023 Jolint | Powered by Jolint
 
                  </Typography>
              </Grid>
          </Grid>
              
       </footer>
  )
}
