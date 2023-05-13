import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutConstitution from '../../components/Layout/LayoutConstitution'
import AppBar from '../../components/AppBar/AppBar'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const ConstitutionPage = () => {

  return (
    <Page pageTitle='Constitution | Northmead Bowling Club'>
      <AppBar />
      <LayoutConstitution />
      <LabelBottomNavigation />
    </Page>
  )
}
export default ConstitutionPage
