import { Grid, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Box from '@mui/material/Box';

interface sectionType {
    sectionId?: number | undefined
}

const Boxes = ({ sectionId }: sectionType) => {
  return (
      <Grid sx={{m: 3}} container>
          <Box
             sx={{
          height: 150,
          width: 100,
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
                  p: 2
          
              }}>
              <Typography >
                  
              </Typography>
              <CheckBoxOutlineBlankIcon />
          </Box>
           <Box
             sx={{
          height: 150,
          width: 100,
          backgroundColor: sectionId && sectionId >= 2? 'none' : 'lightgrey',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
                  p: 2
          
              }}>
              <Typography >
                  
              </Typography>
              <CheckBoxOutlineBlankIcon />
          </Box>
          <Box
             sx={{
          height: 150,
          width: 100,
          backgroundColor: sectionId && sectionId >= 3 ? 'none' : 'lightgrey',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
                  p: 2
          
              }}>
              <Typography >
                  
              </Typography>
              <CheckBoxOutlineBlankIcon />
          </Box>
          <Box
             sx={{
          height: 150,
          width: 100,
          backgroundColor: sectionId && sectionId >= 4 ? 'none' : 'lightgrey',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
                  p: 2
          
              }}>
              <Typography >
                  
              </Typography>
              <CheckBoxOutlineBlankIcon />
          </Box>
    </Grid>
  )
}

export default Boxes;