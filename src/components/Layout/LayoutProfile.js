import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Autocomplete from '../Autocomplete/Autocomplete'
import BusinessCard from '../BusinessCard/BusinessCard'
import Members from '../Members/Members'
import Links from 'components/Links/Links'
import { Divider } from '@mui/material';
// import CreatePost from '../../components/Posts/CreatePost'
import MyAccount from '../../pages/MyAccount/MyAccount'
import ProfileForm from 'components/ProfileForm/ProfileForm';
import LoginButton from '../../components/LoginButton/LoginButton'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function LayoutProfile() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={2.5}>
          <Item elevation={6} style={{ height: '92vh', marginTop: '4px', marginLeft: '4px', marginRight: '0' }}>
            <Links />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item elevation={6} style={{ height: '92vh', marginTop: '4px', marginLeft: '0', marginRight: '0', overflow: 'scroll' }}>
            <Autocomplete />
            <MyAccount elevation={6} style={{ position: 'relative', top: '-200px' }} />
            <ProfileForm elevation={6} style={{ position: 'relative', top: '-2px' }} />
          </Item>
        </Grid>
        <Grid item xs={2.5}>
          <Item elevation={6} style={{ height: '92vh', marginTop: '4px', marginLeft: '0', marginRight: '4px' }}>
            <LoginButton />
            <BusinessCard />
            <Divider />
            <Members />
            <Divider />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}