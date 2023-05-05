import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Contact() {
  return (
    <Box
      sx={{
        width: '100%',
        // height: "100%",
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          // height: '100%',
        },
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          height: 150,
          // '& > :not(style)': {
          //   m: 1,
          //   width: '100%',
          //   height: 250,
          // },
        }}
      >
        <h2>NORTHMEAD BOWLING CLUB CONTACT DETAILS</h2>
        <div class="club-details" id="tooltip-club-details">
          <div id="club-phone"> <i class="fa fa-phone"> </i> <strong> Telephone:</strong> +27 11 849 9919
          </div>
          <div id="club-address"> <i class="fa fa-location"> </i> <strong> Physical address:</strong> Cnr 8th
            Av
            and 5th St,
            Northmead Benoni, 1501, Gauteng Province, South Africa
          </div>
          <div id="club-postal"> <i class="fa fa-envelope"> </i> <strong> Postal address:</strong> P.O. Box
            15570, Farrarmere,
            1518, Gauteng, South Africa
          </div>
        </div>
      </Paper>
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          height: 650,
          '& > :not(style)': {
            m: 1,
            width: '100%',
            height: 600,
          },
        }}
      >
        <table>
          <h2>Executive Leadership</h2>
          <tr class="light">
            <td>Club Chairman</td>
            <td>Andrew Flemming</td>
            <td>chairman@northmeadbowls.co.za</td>
          </tr>
          <tr>
            <td>Vice-Chair</td>
            <td>---Vacant---</td>
            <td></td>
          </tr>
          <tr class="light">
            <td>Club Treasurer</td>
            <td>Lloyd Cameron</td>
            <td></td>
          </tr>
          <tr>
            <td>Club Secretary</td>
            <td>Stephanie Hill</td>
            <td>secretary@northmeadbowls.co.za</td>
          </tr>
          <tr class="light">
            <td>Competition Secretary</td>
            <td>Rodney Winnan</td>
            <td>competitionsecretary@northmeadbowls.co.za</td>
          </tr>
          <tr>
            <td>Committee</td>
            <td>Elize Fritz</td>
            <td></td>
          </tr>
          <tr class="light">
            <td></td>
            <td>Rob Clough</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Chantal Grotto Henn</td>
            <td></td>
          </tr>
          <tr class="light">
            <td></td>
            <td>Deon Henn</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Ellen Zungu</td>
            <td></td>
          </tr>
        </table>
      </Paper>
      <Paper
        elevation={6}
        sx={{
          width: '97%',
          height: 600,
          '& > :not(style)': {
            m: 1,
            width: '97%',
            height: 580,
          },
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1853.2867336870258!2d28.32212660978699!3d-26.174228827693916!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sza!4v1671890179137!5m2!1sen!2sza"
          title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          id="tooltip-map-iframe">
        </iframe>
      </Paper>
    </Box>
  );
}