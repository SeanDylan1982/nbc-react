import red from '@mui/material/colors/red'
import green from '@mui/material/colors/green'
import pink from '@mui/material/colors/pink'
import purple from '@mui/material/colors/purple'
import cyan from '@mui/material/colors/cyan'

const themes = [
  {
    id: 'default',
  },
  {
    id: 'purple',
    color: purple[500],
    source: {
      palette: {
        primary: purple,
        secondary: pink,
        error: red,
      },
    },
  },
  {
    id: 'green',
    color: green[500],
    source: {
      palette: {
        primary: green,
        secondary: cyan,
        error: red,
      },
    },
  },
]

export default themes
