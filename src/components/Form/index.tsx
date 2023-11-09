
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form() {
    return (
       
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1,ml: '2rem', width: '25ch' },
      }}
      noValidate
          autoComplete="off">
           
             <TextField id="standard-basic" label="Name: " variant="standard" />
             <br />
             <TextField id="standard-basic" label="Date: " variant="standard" />
             <br/>
            <TextField id="standard-basic" label="Signature: " variant="standard" />
    </Box >
          
   
  );
}