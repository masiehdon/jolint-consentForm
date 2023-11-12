import { Box, Button } from "@mui/material";

interface handleNextProps {
  handleNextPage: () => void
}

export default function index({handleNextPage}: handleNextProps) {

    function handleSubmit() {
    handleNextPage()
    }
    
  return (
      <Box sx={{m: 5}}>
          <Button  onClick={handleSubmit}
        variant='contained'
        size="large"
        sx={{ background: '#CB7CAC', width: 175, height: 55, borderRadius: 2, boxShadow: 2 }}
      >
          Submit
        </Button>
    </Box>
  )
}
