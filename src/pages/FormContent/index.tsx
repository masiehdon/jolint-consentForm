import { Button, ButtonGroup, Grid, Typography } from "@mui/material"
import { useState } from "react"
import formData from '../../data/formData'


export const FormContent = () => {
    const [currentPageIndex, setCurrentPageContent] = useState<number>(0)
  
  function handleNextPage() {
    setCurrentPageContent(prev => (prev < formData.length - 1 ? prev + 1 : prev))
  }

  function handlePriviousPage() {
    setCurrentPageContent(prev => (prev > 0 ? prev - 1 : prev))
  }
  
  return (
    <Grid container>
      {formData[currentPageIndex] && 
      <Grid item xs={12}>
          <Typography variant="h5">
            {formData[currentPageIndex].title}
          </Typography>
          <Typography variant="body2">
            {formData[currentPageIndex].content}
          </Typography>
          {formData[currentPageIndex].subContent &&
            <Typography variant='body2'>
              {formData[currentPageIndex].subContent}
            </Typography>
          }
        </Grid>
      }
      
        <Button onClick={handlePriviousPage} variant="outlined" sx={{mr: 10, ml: 10}}>
          Previous
        </Button>
        
      <Button variant="contained" onClick={handleNextPage}>
        Next
        </Button>
       
    </Grid>
  )
}
