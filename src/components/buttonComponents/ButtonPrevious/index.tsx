import { Button, Box } from "@mui/material";

interface PrevProp {
  handlePreviousPage:() => void
}

export default function index({ handlePreviousPage }: PrevProp) {
  return (
    
          <Box sx={{m: 5}}>
         
      <Button
        onClick={handlePreviousPage}
        variant="outlined"
        size="large"
          sx={{
            border: '2px solid #2C3386', width: 175, height: 55, borderRadius: 2, boxShadow: 2 }}
      >
          Back
        </Button>
       </Box>
     )
}
