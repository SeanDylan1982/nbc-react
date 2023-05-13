import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import LayoutGallery from '../../components/Layout/LayoutGallery'
import AppBar from '../../components/AppBar/AppBar'
import LabelBottomNavigation from '../../components/BottomNavigation/BottomNavigation';
import { Analytics } from '@vercel/analytics/react';

const GalleryPage = () => {

  return (
    <Page pageTitle='Gallery | Northmead Bowling Club'>
      <AppBar />
      <LayoutGallery />
      <LabelBottomNavigation />
      <Analytics />
    </Page>
  )
}
export default GalleryPage
