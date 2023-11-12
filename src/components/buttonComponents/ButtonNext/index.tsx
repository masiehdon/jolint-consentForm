import { Button, Box } from "@mui/material";

interface NextProps {
  handleNextPage: () => void
}

export default function index({ handleNextPage }: NextProps) {
  return (
    <Box sx={{m: 5}}>
     
      <Button
        variant="contained"
        onClick={handleNextPage}
        size="large"
          sx={{ background: '#2C3386', width: 175, height: 55, borderRadius: 2}}
      >
        Next
        </Button>
    
    </Box>
  )
}
