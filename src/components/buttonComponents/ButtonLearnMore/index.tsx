import { Button, Box } from "@mui/material";


export default function index() {
  return (
    <Box sx={{m: 5}}>
     
      <Button
        variant="contained"
         size="large"
          sx={{ background: '#2C3386', width: 175, height: 55, borderRadius: 2, boxShadow: 2}}
      >
       Learn More
        </Button>
    
    </Box>
  )
}
