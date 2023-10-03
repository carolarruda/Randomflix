import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader = () => {
  return (
    <Box sx={{ display: "flex", color: 'red' }}>
      <CircularProgress sx={{ color: 'red' }} />
    </Box>
  );
};

export default Loader;
