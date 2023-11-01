import { Grid, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Box from '@mui/material/Box';

interface sectionType {
    sectionId?: number | undefined
}

const Boxes = ({ sectionId }: sectionType) => {
    return (
      <Box sx={{ ml: 3, width: '100%'}}>
      <Grid  container>
          <Grid item xs={12} sm={6} md={3} sx={{direction: "column", display: 'flex'}}>
          <Box
             sx={{
        Width: '20%',
          minHeight: '100%',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
                      p: 2,
                      boxSizing: 'border-box'
          
              }}>
              <Typography >
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae perferendis deleniti libero doloribus sint sunt. Consequuntur reiciendis maxime repellendus sunt iste magnam! Dolorem alias illo, suscipit totam quos pariatur?
              </Typography>
              <CheckBoxOutlineBlankIcon />
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{direction: "column", display: 'flex'}}>
           <Box
             sx={{
           Width: '20%',
          minHeight: '100%',
          backgroundColor: sectionId && sectionId >= 2? 'none' : 'lightgrey',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          m: 2,
                      p: 2, 
          boxSizing: 'border-box'
                
              }}>
              <Typography >
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a, minima laboriosam, sit, explicabo nisi ipsum eveniet numquam odit rem et doloribus! Accusamus quisquam cumque ipsam hic totam, neque placeat.
              </Typography>
              <CheckBoxOutlineBlankIcon />
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{direction: "column", display: 'flex'}}>
          <Box
             sx={{
          Width: '20%',
          minHeight: '100%',
          backgroundColor: sectionId && sectionId >= 3 ? 'none' : 'lightgrey',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
                      p: 2,
                  boxSizing: 'border-box'
          
              }}>
              <Typography >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquid dolorum provident illo eos voluptatem at quia, laudantium dolor? Minus impedit atque possimus consequatur voluptas quis soluta! Possimus, ipsa tempora.
              </Typography>
              <CheckBoxOutlineBlankIcon />
              </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{direction: "column", display: 'flex'}}>
          <Box
             sx={{
          Width: '20%',
          minHeight: '100%',
          backgroundColor: sectionId && sectionId >= 4 ? 'none' : 'lightgrey',
          border: '1px black solid',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
                  m: 2,
                      p: 2,
                  boxSizing: 'border-box'
          
              }}>
              <Typography >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi maiores debitis fugit! Nesciunt impedit qui quod aliquid tempore eligendi similique, asperiores ut cum id molestias, ad esse quae incidunt.
              </Typography>
              <CheckBoxOutlineBlankIcon />
              </Box>
              </Grid>
            </Grid>
            </Box>
  )
}

export default Boxes;