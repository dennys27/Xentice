import { Box } from '@mui/system';
import React from 'react';
import Search from '../Search/Search';
import './LandingPage.css'

const LandingPage = () => {
  return (
    <Box className = "wrapper" sx={{ height: "70vw",width:"auto" }}>
          
          <Search/>
    </Box>
  )
}

export default LandingPage