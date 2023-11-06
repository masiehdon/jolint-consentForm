import { Button, Box } from "@mui/material";

interface NextProps {
  handleNextPage: () => void
}

export default function index({ handleNextPage }: NextProps) {
  return (
    <Box sx={{m: 5}}>
      {/* <Grid item xs={12} sm={6} md={6} sx={{ mt: {xs: 5,sm: 15, md: 15, lg: 15}, display: 'flex'}}> */}
      <Button
        variant="contained"
        onClick={handleNextPage}
        size="large"
          sx={{ background: '#2C3386', width: 175, height: 55}}
      >
        Next
        </Button>
        {/* </Grid> */}
    </Box>
  )
}
