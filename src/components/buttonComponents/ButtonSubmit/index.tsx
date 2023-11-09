import { Button } from "@mui/material";

interface handleNextProps {
  handleNextPage: () => void
}

export default function index({handleNextPage: handleNextProps}) {

    function handleSubmit() {
    handleNextPage()
    }
    
  return (
      <div>
          <Button  onSubmit={handleSubmit}
          variant='contained' sx={{ background: '#EDEDED' }}>
          Submit
        </Button>
    </div>
  )
}
