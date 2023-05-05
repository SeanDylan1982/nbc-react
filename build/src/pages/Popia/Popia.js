import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutPopia from '../../components/Layout/LayoutPopia'
// import AppBar from '../../components/AppBar/AppBar'

const PopiaPage = () => {

  return (
    <Page pageTitle='Popia | Northmead Bowling Club'>
      {/* <AppBar /> */}
      <LayoutPopia />
    </Page>
  )
}
export default PopiaPage
