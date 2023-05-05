/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const SignUp = lazy(() => import('../pages/SignUp/SignUp'))
const PasswordReset = lazy(() => import('../pages/PasswordReset/PasswordReset'))
const About = lazy(() => import('../pages/About'))
const Home = lazy(() => import('../pages/Home/Home'))
const News = lazy(() => import('../pages/News/News'))
const Cardings = lazy(() => import('../pages/Cardings/Cardings'))
const Gallery = lazy(() => import('../pages/Gallery/Gallery'))
const Constitution = lazy(() => import('../pages/Constitution/Constitution'))
const Directions = lazy(() => import('../pages/Directions/Directions'))
const Popia = lazy(() => import('../pages/Popia/Popia'))
const Contact = lazy(() => import('../pages/Contact/Contact'))
const DialogDemo = lazy(() => import('../pages/DialogDemo/DialogDemo'))
const ToastDemo = lazy(() => import('../pages/ToastDemo/ToastDemo'))
const FilterDemo = lazy(() => import('../pages/FilterDemo'))
const ListPageDemo = lazy(() => import('../pages/ListPageDemo'))
const TabsDemo = lazy(() => import('../pages/TabsDemo'))
const Profile = lazy(() => import('../../src/pages/Profile/Profile.js'))

const routes = [
  {
    path: '/signin',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <SignIn redirectTo="/Profile" />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/signup',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <SignUp redirectTo="/Profile" />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/password_reset',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <PasswordReset redirectTo="/home" />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/Profile',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Profile />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/about',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <About />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/home',
    exact: true,
    element: <Home />,
  },
  {
    path: '/news',
    exact: true,
    element: <News />,
  },
  {
    path: '/cardings',
    exact: true,
    element: <Cardings />,
  },
  {
    path: '/gallery',
    exact: true,
    element: <Gallery />,
  },
  {
    path: '/constitution',
    exact: true,
    element: <Constitution />,
  },
  {
    path: '/directions',
    exact: true,
    element: <Directions />,
  },
  {
    path: '/popia',
    exact: true,
    element: <Popia />,
  },
  {
    path: '/contact',
    exact: true,
    element: <Contact />,
  },
  {
    path: '/LandingPage',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <News />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/LandingPage',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <Cardings />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/LandingPage',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <Gallery />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/LandingPage',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <Constitution />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/LandingPage',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <Directions />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/LandingPage',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <Contact />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/LandingPage',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <Popia />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/LandingPage',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <SignUp />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/my_account',
    exact: true,
    element: (
      <AuthorizedRoute>
        <Profile />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/home',
    exact: true,
    element: (
      <UnauthorizedRoute>
        <Home />
      </UnauthorizedRoute>
    ),
  },
  {
    path: '/dialog_demo',
    exact: true,
    element: (
      <AuthorizedRoute>
        <DialogDemo />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/toast_demo',
    exact: true,
    element: (
      <AuthorizedRoute>
        <ToastDemo />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/filter_demo',
    exact: true,
    element: (
      <AuthorizedRoute>
        <FilterDemo />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/list_page_demo',
    exact: true,
    element: (
      <AuthorizedRoute>
        <ListPageDemo />
      </AuthorizedRoute>
    ),
  },
  {
    path: '/tabs_demo',
    exact: true,
    element: (
      <AuthorizedRoute>
        <TabsDemo />
      </AuthorizedRoute>
    ),
  },
]

export default routes
