import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1
  },
  title: {
    flexGrow: 2,
    fontFamily: 'Dungeon',
  }
}))

const renderMenuItem = (route, title, handleClose) => (
  <MenuItem component={ NavLink } to={ route } onClick={ handleClose }>{ title }</MenuItem>
)

export default (props) => {
  const routes = props.routes
  const menuItems = [
    {
      route: routes.home,
      title: 'Home',
    },
    {
      route: routes.blog,
      title: 'Blog',
    },
    {
      route: routes.about,
      title: 'About',
    },
    {
      route: routes.contact,
      title: 'Contact Us',
    }
  ]

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar
      position='absolute'
      className={classes.appBar}>
      <Toolbar>
        <IconButton><MenuIcon onClick={ handleClick }/></IconButton>
        <Menu
          id='nav-menu'
          anchorEl={ anchorEl }
          keepMounted
          open={Boolean(anchorEl)}
          onClose={ handleClose }>
          { menuItems.map(el => renderMenuItem(el.route, el.title, handleClose)) }
        </Menu>
        <Typography
          variant='h4'
          color='inherit'
          className={classes.title}>
          Thoughtful Brew
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
