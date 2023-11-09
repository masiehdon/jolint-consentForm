import { Button, Box } from "@mui/material";

interface HowProps {
  handleNextPage: () => void
}

export default function index({ handleNextPage }: HowProps) {
  return (
    <Box sx={{m: 5}}>
      
      <Button
        variant="contained"
        onClick={handleNextPage}
        size="large"
          sx={{ background: '#2C3386', width: 175, height: 55}}
      >
        How it Works
        </Button>
      
    </Box>
  )
}
