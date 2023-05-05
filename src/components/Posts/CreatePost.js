import * as React from 'react';
// import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import { Button, TextField, Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import { useState } from 'react'
// import { useAuth } from 'base-shell/lib/providers/Auth'
// import { useNavigate, useLocation } from 'react-router-dom'
import { useIntl } from 'react-intl'
// import { useMenu } from 'material-ui-shell/lib/providers/Menu'
import { useTheme } from '@mui/material/styles'
import CustomPaper from '../../components/CustomPaper'
// import AppBar from '../../components/AppBar/AppBar'
// import users from '../../config/users.js'
import postDetails from '../../config/postDetails.js'

const CreatePost = ({ redirectTo = '/Post' }) => {
  const intl = useIntl()
  // const navigate = useNavigate()
//   const location = useLocation()
  const theme = useTheme()
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  // const { toggleThis } = useMenu()
  // const { setAuth } = useAuth()

  function handleSubmit(event) {
    event.preventDefault()
    post({
      // displayName: username,
      postTitle: postTitle,
      postBody: postBody,
    })
    return (postTitle, postBody);
  }

  function post() {
    const { postTitle, postBody } = handleSubmit()
    postDetails.JSON.stringify(postTitle, postBody)
  }

  // const authenticate = (user) => {
  //   setAuth({ isAuthenticated: true, ...user })
    
  //   toggleThis('isAuthMenuOpen', false)
    
  //   let from = new URLSearchParams(location.search).get('from')
    
  //   if (from) {
  //     navigate(from, { replace: true })
  //   } else {
  //     navigate(redirectTo, { replace: true })
  //   }
  // }
  
  // function getUserData() {
  //   const userData = localStorage.getItem('auth');
  //   console.log(userData);
    // users({ userData })
    // let { usernameSaved, emailSaved, passwordSaved, confirmPasswordSaved } = userData
    // console.log(usernameSaved, emailSaved, passwordSaved, confirmPasswordSaved);
    // const uid = randomNumber()
    // users({ uid })
    // users({ usernameSaved, emailSaved, passwordSaved, confirmPasswordSaved })
  // }
  // getUserData()
  
  // function randomNumber() {
  //   for (let i = 0; i < 4; i++) {
  //     let rand = Math.floor(Math.random() * 9 + 1);
  //     let num = []
  //     num+=rand
  //     console.log(rand,num);
  //   }
  // }

  return (
    <Page pageTitle='Sign Up | Northmead Bowling Club'>
      {/* <Appbar /> */}
      <CustomPaper elevation={6}>
        <div
          className={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: `100%`,
          }}
        >
          <Typography component="h1" variant="h5">
            {intl.formatMessage({ id: 'create_post', defaultMessage: 'Create a post...' })}
          </Typography>
          <form
            style={{ marginTop: theme.spacing(1) }}
            onSubmit={handleSubmit}
            noValidate
          >
            <TextField
              value={postTitle}
              onInput={(e) => setPostTitle(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="postTitle"
              label={intl.formatMessage({
                id: 'postTitle',
                defaultMessage: 'postTitle',
              })}
              name="postTitle"
              autoComplete="postTitle"
              autoFocus
            />
            <TextField
              value={postBody}
              onInput={(e) => setPostBody(e.target.value)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="PostBody"
              label={intl.formatMessage({
                id: 'PostBody',
                defaultMessage: 'PostBody',
              })}
              name="PostBody"
              autoComplete="PostBody"
            />
            <input
              type="file"
              label='file_upload'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: theme.spacing(3, 0, 2) }}
            >
              {intl.formatMessage({ id: 'Create_Post', defaultMessage: 'Create_Post' })}
              <SendIcon />
            </Button>
          </form>
        </div>
      </CustomPaper>
    </Page>
  )
}

export default CreatePost
