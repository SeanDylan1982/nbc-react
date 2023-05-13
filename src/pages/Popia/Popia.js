import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutPopia from '../../components/Layout/LayoutPopia'
import AppBar from '../../components/AppBar/AppBar'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const PopiaPage = () => {

  return (
    <Page pageTitle='Popia | Northmead Bowling Club'>
      <AppBar />
      <LayoutPopia />
      <LabelBottomNavigation />
    </Page>
  )
}
export default PopiaPage
