import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutNews from '../../components/Layout/LayoutNews'
// import AppBar from '../../components/AppBar/AppBar'

const NewsPage = () => {

  return (
    <Page pageTitle='News | Northmead Bowling Club'>
      {/* <AppBar /> */}
      <LayoutNews />
    </Page>
  )
}
export default NewsPage
