import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import AppBar from '../../components/AppBar/AppBar'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const HomePage = () => {

  return (
    <Page pageTitle='Northmead Bowling Club' >
      <AppBar />
      <Layout />
      <LabelBottomNavigation />
    </Page>
  )
}
export default HomePage
