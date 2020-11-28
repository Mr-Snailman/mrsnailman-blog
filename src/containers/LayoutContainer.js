import AppBar from '@material-ui/core/AppBar'
import BlmBanner from '../components/BlmBanner'
import MainContentWrapper from '../components/MainContentWrapper'
import NavBar from '../components/NavBar'
import React from 'react'
import { makeStyles, } from '@material-ui/core/styles'
import background from '../background.webp'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1,
  },
  toolbar: theme.mixins.toolbar,
  root: {
    zIndex: 1,
    overflow: 'hidden',
    height: '100vh',
    [theme.breakpoints.up('lg')]: {
      background: `no-repeat top/120% url(${background})`,
    },
    [theme.breakpoints.down('md')]: {
      background: `no-repeat top/150% url(${background})`,
    },
    [theme.breakpoints.down('sm')]: {
      background: '#FFF',
    },
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
      <AppBar position='absolute' className={ classes.appBar }>
        <BlmBanner/>
        <NavBar/>
      </AppBar>
      <MainContentWrapper>
        { props.children }
      </MainContentWrapper>
    </div>
  )
}

