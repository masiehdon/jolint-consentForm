import { Box, Typography } from "@mui/material";
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';


 const FormHeading = () => {
  return (
      <Box sx={{maxWidth: '100vw'}}>
          <Typography
              variant="h4"
        sx={{ mt: 5, mb: 5,ml: 3, fontWeight: 'bold', display: 'flex', alignItems: 'center', fontsize: {
          xs: .8,
        } }}
      >
        Consent Form for Data Processing
        <VolumeUpOutlinedIcon sx={{
          fontSize: '1.2em', height: '1em', fontsize: {
          xs: .8,
        } }}
        />
      </Typography>
     
    </Box>
  )
}

export default FormHeading;