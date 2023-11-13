import { Button, Box } from "@mui/material";

interface NextProps {
  handleNextPage: () => void
}

export default function index({ handleNextPage }: NextProps) {
  return (
    <Box sx={{m: 5, py: {xs: 0, sm: 0}, mt: {xs: 0}, mb: {xs: 2, sm: 2}}}>
     
      <Button
        variant="contained"
        onClick={handleNextPage}
        size="large"
          sx={{ background: '#2C3386', width: 175, height: 55, borderRadius: 2, boxShadow: 2}}
      >
        Next
        </Button>
    
    </Box>
  )
}
