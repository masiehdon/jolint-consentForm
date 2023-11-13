import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



export default function Form() {
  
    return (
     
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,ml: '2rem', width: '25ch', mb: 3, justifyContent: {xs: 'center', sm: 'center'}, alignItems: {xs: 'center', sm: 'center'}, display: {xs: 'flex', sm: 'flex'} },
      }}
      noValidate
          autoComplete="off">
           
             <TextField required
          id="outlined-required" label="Name: " variant="standard" />
             <br />
             <TextField required
          id="outlined-required" label="Date: " variant="standard" />
          <br />
          <br/>
          <TextField required
          id="outlined-required" label="Signature: " variant="standard" />
        
        </Box > 
   
  );
}