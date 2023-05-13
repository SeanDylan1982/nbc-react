import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutProfile from '../../components/Layout/LayoutProfile'
import AppBar from '../../components/AppBar/AppBar'
import handler from '../../config/Page'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import { Analytics } from '@vercel/analytics/react';

const userData = localStorage.getItem("auth");
console.log(userData);
handler();

const ProfilePage = () => {

  return (
    <Page pageTitle='Northmead Bowling Club' >
      <AppBar />
      <LayoutProfile />
      <LabelBottomNavigation />
      <Analytics />
    </Page>
  )
}
export default ProfilePage
