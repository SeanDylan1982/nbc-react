import * as React from 'react';
import Box from '@mui/material/Box';

export default function Constritution() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '92%',
        backgroundColor: 'primary.dark',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
      <object data="http://www.northmeadbowls.co.za/Constitution/Northmead%20Constitution%20and%20Bye-Laws%202019%20.pdf" title="constitution" aria-label="constitution and bye-laws" type="application/pdf" width="100%" height="100%"></object>
    </Box>
  );
}
