import { Grid, Button } from "@mui/material";


interface MyButtonProps {
    handlePreviousPage: () => void;
    handleNextPage: () => void;
    // currentPageIndex: number;
    // setCurrentPageContent: () => void;
}

const Buttons: React.FC<MyButtonProps> = ({ handlePreviousPage, handleNextPage }) => {
    
   
  
  return (
      <Grid container width={'50vw'}>
          <Grid item xs={12} sm={6} md={6} sx={{mt: 15, display: 'flex'}}>
      <Button
        onClick={handlePreviousPage}
        variant="outlined"
        size="large"
          sx={{
            border: '2px solid #2C3386', width: 175, height: 55
          }}
      >
          Back
        </Button>
       </Grid>

      <Grid item xs={12} sm={6} md={6} sx={{ mt: {xs: 5,sm: 15, md: 15, lg: 15}, display: 'flex'}}>
      <Button
        variant="contained"
        onClick={handleNextPage}
        size="large"
          sx={{ background: '#2C3386', width: 175, height: 55}}
      >
        Next
        </Button>
        </Grid>
    </Grid>
  )
}

export default Buttons;