import AppBar from '@material-ui/core/AppBar'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  dungeon: {
    fontFamily: 'Dungeon',
    marginRight: theme.spacing(3),
    textDecoration: 'none',
  },
  paypalLink: {
    textDecoration: 'none',
  },
  paypal: {
    fontFamily: 'Dungeon',
  }
}))

export default () => {
  const routes = useSelector(state => state.config.routes)
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const handleMenuClick = e => setAnchorEl(e.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)
  const menuTypographyFunc = (navItem) =>
    <Typography
      className={ classes.dungeon }
      key={ navItem.route }
      color='inherit'
      variant='h5'
      component={ NavLink }
      to={ navItem.route }
      { ...navItem.props }>{ navItem.title }</Typography>

  const navItems = [
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
  ].map(menuTypographyFunc)
    .concat([
    <a
      href='https://paypal.me/thoughtfulbrew'
      target='_blank'
      rel='noopener noreferrer'
      className={ classes.paypalLink }>
      <Typography
        className={ classes.paypal }
        color='inherit'
        variant='h5'>
        Donate
      </Typography>
    </a>,
  ])

  return (
    <AppBar
      position='absolute'
      className={classes.appBar}>
      <Toolbar>
        <div className={ classes.title }>
          <Hidden mdUp>
            <IconButton onClick={ handleMenuClick }>
              <MenuIcon/>
            </IconButton>
            <Menu
              id='nav-menu'
              anchorEl={ anchorEl }
              keepMounted
              open={ Boolean(anchorEl) }
              onClose={ handleMenuClose }>
              <MenuItem onClick={ handleMenuClose }>
                { menuTypographyFunc({
                  route: routes.home,
                  title: 'Home',
                })}
              </MenuItem>
              { navItems.map((el, i) => 
                <MenuItem key={ i } onClick={ handleMenuClose }>{ el }</MenuItem>
              )}
            </Menu>
          </Hidden>
          { menuTypographyFunc({
              route: routes.home,
              title: 'Thoughtful Brew',
              props: { variant: 'h4' },
          })}
          <Hidden smDown>
              { navItems }
          </Hidden>
        </div>
        <Hidden smDown>
          <SocialMediaIcons/>
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

