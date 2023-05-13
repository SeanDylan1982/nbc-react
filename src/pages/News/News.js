import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutNews from '../../components/Layout/LayoutNews'
import AppBar from '../../components/AppBar/AppBar'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const NewsPage = () => {

  return (
    <Page pageTitle='News | Northmead Bowling Club'>
      <AppBar />
      <LayoutNews />
      <LabelBottomNavigation />
    </Page>
  )
}
export default NewsPage
