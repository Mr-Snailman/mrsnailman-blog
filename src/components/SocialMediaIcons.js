import Avatar from '@material-ui/core/Avatar'
import FacebookIcon from '@material-ui/icons/Facebook'
import Grid from '@material-ui/core/Grid'
import InstagramIcon from '@material-ui/icons/Instagram'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'

const useStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing(2),
  },
}))

// TODO: Turn Social Media on
const Facebook = props =>
  <Grid item className={ props.classes.gridItem }>
    <a
      href='https://www.facebook.com/thoughtfulbrew/'
      target='_blank'
      rel='noopener noreferrer'>
      <Avatar>
        <FacebookIcon/>
      </Avatar>
    </a>
  </Grid>

// TODO: Turn Social Media on
const Instagram = props =>
  <Grid item className={ props.classes.gridItem }>
    <a
      href='https://www.instagram.com/thoughtfulbrewer/'
      target='_blank'
      rel='noopener noreferrer'>
      <Avatar>
        <InstagramIcon/>
      </Avatar>
    </a>
  </Grid>

// TODO: Turn Social Media on
const Twitter = props =>
  <Grid item className={ props.classes.gridItem }>
    <a
      href='https://twitter.com/ThoughtfulBrew'
      target='_blank'
      rel='noopener noreferrer'>
      <Avatar>
        <TwitterIcon/>
      </Avatar>
    </a>
  </Grid>

const LinkedIn = props =>
  <Grid item className={ props.classes.gridItem }>
    <a
      href='https://linkedin.com/in/dsaunders2414/'
      target='_blank'
      rel='noopener noreferrer'>
      <Avatar>
        <LinkedInIcon/>
      </Avatar>
    </a>
  </Grid>


export default props => {
  const classes = { ...useStyles(), ...props.classes }
  return (
    <>
      <LinkedIn classes={ classes } />
    </>
  )
}

