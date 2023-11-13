import { Button, Box } from "@mui/material";


export default function index() {
  return (
    <Box sx={{m: 5, justifyContent: 'center', alignItems: 'center', py: {xs: 0, sm: 0}, mt: {xs: 0}, mb: {xs: 2, sm: 2}}}>
     
      <Button
        variant="contained"
         size="large"
          sx={{ background: '#2C3386', width: 175, height: 55, borderRadius: 2, boxShadow: 2 }}
      >
       Learn More
        </Button>
    
    </Box>
  )
}
