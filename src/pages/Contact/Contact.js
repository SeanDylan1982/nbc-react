import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutContact from '../../components/Layout/LayoutContact'
import AppBar from '../../components/AppBar/AppBar'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation';

const ContactPage = () => {

  return (
    <Page pageTitle='Contact | Northmead Bowling Club'>
      <AppBar />
      <LayoutContact />
      <LabelBottomNavigation />
    </Page>
  )
}
export default ContactPage
