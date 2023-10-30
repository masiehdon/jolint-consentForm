import { Box, Typography } from "@mui/material";
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';


export const FormHeading = () => {
  return (
      <Box>
          <Typography
              variant="h5"
        sx={{ m: 5, fontWeight: 'bold', display: 'flex', alignItems: 'center' }}
      >
        Consent Form for Data Processing
        <VolumeUpOutlinedIcon sx={{ ml: 3, fontSize: '1.5em', height: '1em' }}
        />
      </Typography>
     
    </Box>
  )
}
