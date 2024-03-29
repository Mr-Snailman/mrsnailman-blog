import Avatar from '@material-ui/core/Avatar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import logoSm from '../logo-sm.webp'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
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
  },
  toolbar: {
    minHeight: 54,
  },
}))

export default () => {
  const routes = useSelector(state => state.config.routes)
  const classes = useStyles()
  const [navDrawer, setNavDrawer] = useState(false)
  const menuTypographyFunc = (navItem) =>
    <Typography
      className={ classes.dungeon }
      key={ navItem.route }
      color='inherit'
      variant='h4'
      component={ NavLink }
      to={ navItem.route }
      { ...navItem.props }>{ navItem.title }</Typography>

  const navItems = [
    {
      route: routes.blog,
      title: 'Blog',
    },
    {
      route: routes.recipes,
      title: 'Recipes',
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

  return (
    <Toolbar className={ classes.toolbar }>
      <div className={ classes.title }>
        <Hidden mdUp>
          <IconButton onClick={ () => setNavDrawer(true) }>
            <MenuIcon/>
          </IconButton>
          <Drawer open={ navDrawer } onClose={ () => setNavDrawer(false) }>
            <List onClick={ () => setNavDrawer(false) }>
              <ListItem>
                { menuTypographyFunc({
                  route: routes.home,
                  title: 'Home',
                })}
              </ListItem>
              { navItems.map((el, i) => 
                <ListItem key={ i }>{ el }</ListItem>
              )}
            </List>
          </Drawer>
        </Hidden>
        { menuTypographyFunc({
            route: routes.home,
            title: <React.Fragment><img src={ logoSm } alt='logo'/>Thoughtful Brew</React.Fragment>,
            props: { variant: 'h4' },
        })}
        <Hidden smDown>
            { navItems }
        </Hidden>
      </div>
      <Hidden smDown>
        <a
          href='https://paypal.me/thoughtfulbrew'
          target='_blank'
          rel='noopener noreferrer'
          className={ classes.paypalLink }>
          <Avatar>
            <MonetizationOnIcon />
          </Avatar>
        </a>
        <SocialMediaIcons/>
      </Hidden>
    </Toolbar>
  )
}

