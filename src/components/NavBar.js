import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1
  },
  title: {
    flexGrow: 2,
  }
}))

export default (props) => {
  const classes = useStyles()
  return (
    <AppBar
      position='absolute'
      className={classes.appBar}>
      <Toolbar>
        <Typography
          variant='title'
          color='inherit'
          className={classes.title}>
          Thoughtful Brew
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
