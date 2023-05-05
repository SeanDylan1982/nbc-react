import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutDirections from '../../components/Layout/LayoutDirections'
// import AppBar from '../../components/AppBar/AppBar'

const DirectionsPage = () => {

  return (
    <Page pageTitle='Directions | Northmead Bowling Club'>
      {/* <AppBar /> */}
      <LayoutDirections />
    </Page>
  )
}
export default DirectionsPage
