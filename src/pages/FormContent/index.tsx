import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import formData from '../../data/formData.ts'
import FormHeading from "../FormHeading/index.tsx";
import Boxes from "../../components/Boxes/index.tsx";
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

const textStyle: React.CSSProperties = {
  maxWidth: '65%', 
  overflowWrap: 'break-word',
  marginLeft: 3
};

const FormContent = () => {
  const [currentPageIndex, setCurrentPageContent] = useState<number>(0);
  
const handleNextPage = () => {
  setCurrentPageContent((prev) => prev < formData.length - 1 ? prev + 1 : prev );
};


const handlePreviousPage = () => {
  setCurrentPageContent((prev) => prev > 0 ? prev - 1 : prev);
};

  
     const handleClickBox = (e: React.MouseEvent) => {
     const id =
   
    Number(e.currentTarget.id) <= currentPageIndex + 1
      ? Number(e.currentTarget.id)
      : currentPageIndex;
       setCurrentPageContent(id);
  
   };



  const currentFormPage: SectionType = {
    sectionId: formData[currentPageIndex]?.sectionId || 0,
    id: formData[currentPageIndex]?.id || 0,
    handleClickBox,
    currentPageIndex,
    section: "",
  };

  return (
    <Grid container sx={{ minHeight: '100vh', maxWidth: '100vw', overflowX: 'hidden',ml: 2, mr: {lg: 3} }} alignItems="flex-start">
      <Grid item sx={{p: 2}}>
      <FormHeading />
      <ProgressIcon currentPageIndex={currentPageIndex} />
    </Grid>
      {formData[currentPageIndex].section ? (
        <Grid container
          sx={{p: 2}}
          
        >
          <Grid item xs={12} sx={{ width: '100vw'}}>
            <Typography variant="h4">
              {formData[currentPageIndex].index
                ? `${formData[currentPageIndex].index}. ${formData[currentPageIndex].title}`
                : formData[currentPageIndex].title}
            </Typography>
            <br />
            <Typography variant="h6" sx={textStyle}>
              {formData[currentPageIndex].content}
            </Typography>
            <br />
            {formData[currentPageIndex].subContent && (
              <Typography variant="h6" sx={textStyle}>
                {formData[currentPageIndex].subContent}
              </Typography>
            )}
            <Grid item sx={{ maxWidth: '100vw', maxHeight: '100%' }}>
              <Boxes
                sectionId={currentFormPage?.sectionId || 0}
                handleClickBox={handleClickBox}
              />
            </Grid>
          </Grid>
        </Grid>

      ) : (
          
        <Grid container sx={{p: 2}}>
          <Grid item xs={12}>
            <Typography variant="h4" sx={{ml: 3}}>
              {formData[currentPageIndex].index
                ? `${formData[currentPageIndex].index}. ${formData[currentPageIndex].title}`
                : formData[currentPageIndex].title}
            </Typography>
            <br />
            <Typography variant="h6" sx={textStyle}>
              {formData[currentPageIndex].content}
            </Typography>
            <br />
            {formData[currentPageIndex].index === 9 && (
              <Grid container sx={{p: 2}}>
                <Grid item xs={12}>
                  <Form />
                </Grid>
                  <Grid item xs={12} sm={6} md={3} alignItems={"center"} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ButtonPrevious handlePreviousPage={handlePreviousPage} />
                    </Grid>
                    
                  <Grid item xs={12} sm={6} md={3} alignItems={"center"} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ButtonDone handleNextPage={handleNextPage} />
                </Grid>
                </Grid>
                
              )}
              
            {formData[currentPageIndex].subContent && (
              <Typography variant="h6" sx={textStyle}>
                {formData[currentPageIndex].subContent}
              </Typography>
              )}
              
          </Grid>
          </Grid>
          
      )}

      {formData[currentPageIndex] &&
        formData[currentPageIndex].sectionId !== 1 &&
        formData[currentPageIndex].end !== 'Thank' &&
        formData[currentPageIndex].section !== 'Submit' && 
        formData[currentPageIndex].index !== 9 && (
        <Grid container alignItems={"center"} sx={{ display: 'flex', justifyContent: 'center' }} >
         
          <Grid item xs={12} sm={6} md={3} alignItems={"center"} sx={{maxWidth: '100%', justifyContent: 'center'}}>
            
            <ButtonPrevious handlePreviousPage={handlePreviousPage} />
            
              {formData[currentPageIndex].click !== true && ( 
                <ButtonNext handleNextPage={handleNextPage} />
            )}
            
              {formData[currentPageIndex].title == 'Personal Data' && (
                
                  <ButtonHowItWorks />
               
            )}
            
            {formData[currentPageIndex].id == 5 &&
            
              <ButtonLearnMore />
             
            }

            </Grid>
          </Grid>
        )}
      
      {formData[currentPageIndex].sectionId == 1 && (
        <Grid container sx={{ display: 'flex' }}>
          <Grid item xs={12} sm={6} md={3} alignItems={"center"} justifyContent={'center'} sx={{display: 'flex'}}>
            <ButtonPrevious handlePreviousPage={handlePreviousPage} /> 
          </Grid>
          <Grid item xs={12} sm={6} md={3} alignItems={"center"}
           sx={{ display: 'flex', justifyContent: 'center' }}>
            <ButtonLearnMore />
          </Grid>
        </Grid> 
      )}

      {formData[currentPageIndex].section == 'Submit' && (
        <Grid container sx={{bottom: 0, mb: 30 }} >
        <Grid item xs={12} sm={6} md={3}  sx={{ display: 'flex', alignContent: 'center' }}>
            <ButtonPrevious handlePreviousPage={handlePreviousPage} /> 
          </Grid>
          <Grid item xs={12} sm={6} md={3} alignItems={"center"} sx={{ display: 'flex' }}>
          <ButtonSubmit handleNextPage={handleNextPage} />
          </Grid>
          </Grid>
      )}
      {formData[currentPageIndex].end == 'Thank' && (
        <>
          <ThankYou />
        </>
      )}

    </Grid>
  );
};

export default FormContent;
