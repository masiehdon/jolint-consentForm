import { Typography } from '@mui/material';

import './App.css'
import Header from './pages/Header';
import Footer from './pages/Footer';
import Test from './pages/Test';


function App() {


  return (
    <>
      <Header />
      <Typography variant='h1'>
        Consent Form
      </Typography>
    {/* <Test /> */}
      <Footer />
    </>
    
  )
}

export default App
