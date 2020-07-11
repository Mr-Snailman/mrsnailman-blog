import Avatar from '@material-ui/core/Avatar'
import exerceo from './exerceo.png'
import GithubIcon from '@material-ui/icons/GitHub'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Seo from '../Seo'
import SocialMediaIcons from '../components/SocialMediaIcons'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(),
    paddingLeft: theme.spacing(2),
  },
  mainText: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(),
      paddingRight: theme.spacing(),
      textAlign: 'center',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
export default () => {
  const email = 'thoughtfulbrew@gmail.com'
  const classes = useStyles()
  return (
    <React.Fragment>
      <Seo
        title='Thoughtful Brew - Contact Us'
        description='Contact the author, Dustin Saunders, who writes for the Thoughtful Brew Blog.'
        path='/contact'
      />
      <div className={ classes.mainText }>
        <Typography paragraph>You can reach us via my email if you have any questions, concerns, or comments:</Typography>
        <Typography paragraph>Dustin Saunders: { email }</Typography>
        <Typography paragraph>Additionally, drop a line on the following platforms:</Typography>
      </div>
      <Grid container justify='center'>
        <SocialMediaIcons classes={ classes }/>
        <Grid item className={classes.gridItem}>
          <a
            href='https://github.com/Mr-Snailman'
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar>
              <GithubIcon/>
            </Avatar>
          </a>
        </Grid>
        <Grid item className={classes.gridItem}>
          <a
            href='https://exerceo.org'
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar
              alt='Exerceo'
              src={ exerceo }/>
          </a>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

