import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutCardings from '../../components/Layout/LayoutCardings'
import AppBar from '../../components/AppBar/AppBar'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { Analytics } from '@vercel/analytics/react';

const CardingsPage = () => {

  return (
    <Page pageTitle='Cardings | Northmead Bowling Club'>
      <AppBar />
      <LayoutCardings />
      <LabelBottomNavigation />
      <Analytics />
    </Page>
  )
}
export default CardingsPage
