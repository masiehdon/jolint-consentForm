import { Grid, Button } from "@mui/material";


interface MyButtonProps {
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    // currentPageIndex: number;
    // setCurrentPageContent: () => void;
}

const Buttons: React.FC<MyButtonProps> = ({ handlePreviousPage, handleNextPage }) => {
    
   
  
  return (
      <Grid container>
          <Grid item xs={12} sx={{mt: 15, display: 'flex'}}>
      <Button
        onClick={handlePreviousPage}
        variant="outlined"
        size="large"
          sx={{
            mr: 10, ml: 10, border: '2px solid #2C3386', width: 175,
          }}
      >
          Back
        </Button>
        
      <Button
        variant="contained"
        onClick={handleNextPage}
        size="large"
        sx={{ background: '#2C3386',  width: 175}}
      >
        Next
        </Button>
        </Grid>
    </Grid>
  )
}

export default Buttons;