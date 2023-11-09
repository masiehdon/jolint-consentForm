import { Box, Grid, Typography } from "@mui/material"
import { useState } from "react"
import formData from '../../data/FormData/formData.ts';
import FormHeading from "../FormHeading/index.tsx";
import Boxes from "../../components/Boxes/index.tsx"
import Form from "../../components/Form";
import ThankYou from "../../components/ThankYou";
import ButtonNext from "../../components/buttonComponents/ButtonNext";
import ButtonPrevious from "../../components/buttonComponents/ButtonPrevious";
import ButtonSubmit from "../../components/buttonComponents/ButtonSubmit";
import ButtonDone from "../../components/buttonComponents/ButtonDone";
import ButtonHowItWorks from "../../components/buttonComponents/ButtonHowItWorks";
import ProgressIcon from "../../components/ProgressIcon";
import ButtonLearnMore from "../../components/buttonComponents/ButtonLearnMore";


interface SectionType {
  currentPageIndex: number;
  sectionId?: number;
  id: number;
  handleClickBox: (e: React.MouseEvent) => void;
  section: string;
}

export const FormContent = () => {
  const [currentPageIndex, setCurrentPageContent] = useState<number>(0) 
  
  // Next page
   function handleNextPage() {
    setCurrentPageContent(prev => (prev < formData.length - 1 ? prev + 1 : prev))
  }

  // Previous page
  function handlePreviousPage() {
    setCurrentPageContent(prev => (prev > 0 ? prev - 1 : prev))
  }
  

 const currentFormPage: SectionType = {
  sectionId: formData[currentPageIndex]?.sectionId || 0,
  id: formData[currentPageIndex]?.id || 0,
  handleClickBox: handleClickBox,
  currentPageIndex,
  section: "", 
};
  // // Clicking the boxes takes the user to the desired section
  

function handleClickBox(e: React.MouseEvent) {
  const id = Number(e.currentTarget.id);
  setCurrentPageContent(id);
  console.log('currentPageIndex: ', currentPageIndex);
 console.log('id: ', id);
}


  
  return (
    
    <Box sx={{px: 10, height: '100%', maxWidth: '100vw', overflow: 'hidden',}}>
      <FormHeading />
      <ProgressIcon currentPageIndex={currentPageIndex} />
        {formData[currentPageIndex].section
          ?
       <Grid container >  
      <Grid item xs={12} sx={{maxWidth: '100vw'}}>
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
              <Boxes
                 sectionId={currentFormPage?.sectionId || 0}
          handleClickBox={handleClickBox}
         
              />
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
            {formData[currentPageIndex].index == 9 &&
              <Grid container>
                <Grid item xs={12} >
                  <Form />
                </Grid>
                <Grid item xs={12} sx={{display: 'flex'}}>
                  <ButtonPrevious handlePreviousPage={ handlePreviousPage } />
                  <ButtonDone handleNextPage={handleNextPage} />
                </Grid>
              </Grid>
            }
            
           {formData[currentPageIndex].subContent &&
              <Typography variant='body2'>
              
                {formData[currentPageIndex].subContent}
              </Typography>
              
            }
            
              </Grid>
              </Grid>
        }
      {
        formData[currentPageIndex] &&
        formData[currentPageIndex].sectionId !== 1 &&
        formData[currentPageIndex].end !== 'Thank' &&
        formData[currentPageIndex].section !== 'Submit' && 
        formData[currentPageIndex].index !== 9 && (
          <Grid container sx={{ position: 'sticky', bottom: 0, mb: 30 }} >
            <Grid item xs={6} alignItems={"center"} sx={{maxWidth: '100%', display: 'flex'}}>
            <ButtonPrevious handlePreviousPage={handlePreviousPage}/>
              {
                formData[currentPageIndex].click !== true &&
                (<ButtonNext handleNextPage={handleNextPage} />)
              }
              {
                formData[currentPageIndex].title == 'Personal Data' &&
                <Grid item xs={12} sm={12} sx={{display: 'flex'}}>
                  <ButtonHowItWorks />
                </Grid>
              }
              {formData[currentPageIndex].id == 5 && 
              <ButtonLearnMore />
      }
            
        </Grid>      
          </Grid>
          
        )
      }
      
      {formData[currentPageIndex].sectionId == 1 &&
        <Box sx={{display: 'flex'}}>
       <ButtonPrevious handlePreviousPage={handlePreviousPage}/> 
          <ButtonLearnMore />
          </Box> 
      }
   
      {formData[currentPageIndex].section == 'Submit' && 
        <>
        <ButtonPrevious handlePreviousPage={handlePreviousPage}/> 
      <ButtonSubmit handleNextPage={handleNextPage} />
        </>
      }
     
      {formData[currentPageIndex].end == 'Thank' &&
        <>
        <ThankYou />
        
</>
              }
    </Box>
  )
}
