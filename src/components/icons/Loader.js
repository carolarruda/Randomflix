import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: 'center', minWidth: '100vw',     padding: '15px 50px 15px' }}>
      <CircularProgress sx={{ color: 'red' }} />
    </Box>
  );
};

export default Loader;
