import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutConstitution from '../../components/Layout/LayoutConstitution'
import AppBar from '../../components/AppBar/AppBar'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { Analytics } from '@vercel/analytics/react';

const ConstitutionPage = () => {

  return (
    <Page pageTitle='Constitution | Northmead Bowling Club'>
      <AppBar />
      <LayoutConstitution />
      <LabelBottomNavigation />
      <Analytics />
    </Page>
  )
}
export default ConstitutionPage
