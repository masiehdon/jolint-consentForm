import { Box, Button } from "@mui/material";


export default function index() {
    function handleClose() {

    }
  return (
       <Box sx={{m: 5}}>
          <Button
        variant="contained"
        onClick={handleClose}
        size="large"
          sx={{ background: '#2C3386', width: 175, height: 55}}
      >
        Close
        </Button>
     
    </Box>
  )
}
