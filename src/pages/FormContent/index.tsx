import { Box, Grid, Typography } from "@mui/material"
import { useState } from "react"
import formData from "../../data/formData";
import { FormHeading } from "../FormHeading"
import Boxes from "../../components/Boxes"
import Buttons from "../../components/Buttons"


export const FormContent = () => {
  const [currentPageIndex, setCurrentPageContent] = useState<number>(0) 
  
   function handleNextPage() {
    setCurrentPageContent(prev => (prev < formData.length - 1 ? prev + 1 : prev))
  }

  function handlePreviousPage() {
    setCurrentPageContent(prev => (prev > 0 ? prev - 1 : prev))
  }
  
  return (
    <Box sx={{px: 10, height: '100%', maxWidth: '100vw', overflow: 'hidden'}}>
      <FormHeading />
      
        {formData[currentPageIndex].section
          ?
       <Grid container >  
      <Grid item xs={12} sx={{maxWidth: '100%'}}>
            <Typography variant="h5">
              {formData[currentPageIndex].index ?
                `${formData[currentPageIndex].index}.
           ${formData[currentPageIndex].title}` :
                formData[currentPageIndex].title}
            </Typography>
              <br />
              <Typography variant="body2">
              {formData[currentPageIndex].content}
            </Typography>
            <br />
            {formData[currentPageIndex].subContent &&
              <Typography variant='body2'>
              {formData[currentPageIndex].subContent}
              </Typography>
            }
            <Grid item sx={{maxWidth: '100vw'}}>
              <Boxes sectionId={formData[currentPageIndex].sectionId} />
            </Grid>
          </Grid>
           </Grid>
           :
            <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">
              {formData[currentPageIndex].index ?
                `${formData[currentPageIndex].index}.
           ${formData[currentPageIndex].title}` :
                formData[currentPageIndex].title}
            </Typography>
              <br />
            <Typography variant="body2">
              {formData[currentPageIndex].content}
            </Typography>
            <br />
           {formData[currentPageIndex].subContent &&
              <Typography variant='body2'>
              
                {formData[currentPageIndex].subContent}
              </Typography>
            }
              
              </Grid>
              </Grid>
       }
          <Grid container sx={{mb: 30}} >
            <Grid item xs={12} alignItems={"center"} sx={{maxWidth: '100%'}}>
            <Buttons
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
              /> 
        </Grid>      
 </Grid>
         
    </Box>
  )
}
