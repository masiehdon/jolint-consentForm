import { Box, Button } from "@mui/material";

interface DoneProps {
handleNextPage: () => void
}

export default function index({ handleNextPage }: DoneProps) {
  return (
      <Box sx={{m: 5}}>
          <Button
              variant="contained"
          size="large"
              sx={{ background: '#2C3386', width: 175, height: 55, borderRadius: 2, boxShadow: 2}}
              onClick={handleNextPage}
          >
              Done
          </Button>
    </Box>
  )
}
