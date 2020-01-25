import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

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

export default (props) => {
  const routes = props.routes
  const navItems = [
    {
      route: routes.home,
      title: 'Thoughtful Brew',
      props: { variant: 'h4' },
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

  return (
    <AppBar
      position='absolute'
      className={classes.appBar}>
      <Toolbar>
        <div className={ classes.title }>
          { navItems.map(el =>
            <Typography
              className={ classes.dungeon }
              key={ el.route }
              color='inherit'
              variant='h5'
              component={ NavLink }
              to={ el.route }
              { ...el.props }>{ el.title }</Typography>
          )}
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
          </a>
        </div>
        <SocialMediaIcons/>
      </Toolbar>
    </AppBar>
  )
}

