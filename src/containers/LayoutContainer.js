import MainContentWrapper from '../components/MainContentWrapper'
import NavBar from '../components/NavBar'
import React from 'react'
import { makeStyles, } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    zIndex: 1,
    overflow: 'hidden',
    height: '100vh'
  },
  error: {
    background: 'red'
  },
  success: {
    background: 'green'
  },
}))

export default (props) => {
  const classes = useStyles()
  return (
    <div className={ classes.root }>
      <NavBar/>
      <MainContentWrapper>
        { props.children }
      </MainContentWrapper>
    </div>
  )
}

