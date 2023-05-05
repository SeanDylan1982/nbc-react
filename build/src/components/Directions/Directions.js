import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Directions() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 400,
          height: 400,
        },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: 350,
          height: 250,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 2,
          padding: 2,   
          '& > :not(style)': {
            m: 1,
            width: 350,
            height: 250,
          },
        }}
      >
        <p>
        <h4>ALBERTON BC 2nd Avenue, New Redruth, Alberton.</h4>
        <ul>
          <li>From Geldenhuis interchange follow N12 Vereeniging indicators.</li>
          <li>Turn off at Alberton/Voortrekker Road exit.</li>
          <li>At 1st robot in Voortrekker Road turn left into Ring Road East.</li>
          <li>At 5th robot turn left into Helston Street.</li>
          <li>At T-junction/robot turn right into 2nd Ave.</li>
          <li>Club on right side +- 300 metres</li>
        </ul>
        </p>
      </Paper>
      <Paper
        elevation={6}
        sx={{
          width: 350,
          height: 250,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 2,
          padding: 2,
          '& > :not(style)': {
            m: 1,
            width: 350,
            height: 250,
          },
        }}
      >
        <p>
        <h4>ATLAS BC Bonaero Park, Kempton Park</h4>
        <ul>
          <li>Proceed along N12 toward Witbank. Take Atlas Rd exit.</li>
          <li>Turn north along Atlas Road and pass Atlas Aircraft factory on left.</li>
          <li>Club is on left just beyond factory</li>
          <li>Approximately 3 Km from highway</li>
        </ul>
        </p>
      </Paper>
    </Box>
  );
}