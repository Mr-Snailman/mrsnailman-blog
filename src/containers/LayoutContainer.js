import AppBar from '@material-ui/core/AppBar'
import background from '../background.webp'
//import BlmBanner from '../components/BlmBanner'
import MainContentWrapper from '../components/MainContentWrapper'
import { makeStyles, } from '@material-ui/core/styles'
import NavBar from '../components/NavBar'
import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1,
  },
  toolbar: theme.mixins.toolbar,
  root: {
    zIndex: 1,
    overflow: 'auto',
    maxHeight: '100vh',
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
  const { pathname } = useLocation()
  const rootRef = useRef()
  useEffect(() => {
    rootRef.current.scrollTo(0, 0)
  }, [pathname])
  return (
    <div ref={ rootRef } className={ classes.root }>
      <AppBar position='sticky' className={ classes.appBar }>
        <NavBar/>
      </AppBar>
      <MainContentWrapper>
        { props.children }
      </MainContentWrapper>
    </div>
  )
}

