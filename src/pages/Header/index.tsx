import { Box } from "@mui/material";
import logo from '../../assets/logo.svg'

export default function Header() {

  
  return (
    <Box sx={{width: 1, height: '6rem', boxShadow: 1, margin: '0'}}>
      <img src={logo} alt="jolint" style={{margin: '2rem' }} />
    </Box>
  )
}
