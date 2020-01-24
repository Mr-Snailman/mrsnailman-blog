import Avatar from '@material-ui/core/Avatar'
import FacebookIcon from '@material-ui/icons/Facebook'
import Grid from '@material-ui/core/Grid'
import InstagramIcon from '@material-ui/icons/Instagram'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit,
  },
  mainText: {
    paddingLeft: theme.spacing.unit * 6,
    margin: theme.spacing.unit,
  },
}))
export default () => {
  const publicPath = useSelector((state) => state.config.publicPath)
  const classes = useStyles()
  return (
    <React.Fragment>
      <Grid item className={classes.gridItem}>
        <a
          href='https://www.facebook.com/thoughtfulbrew/'
          target='_blank'
          rel='noopener noreferrer'>
          <Avatar>
            <FacebookIcon/>
          </Avatar>
        </a>
      </Grid>
      <Grid item className={classes.gridItem}>
        <a
          href='https://www.instagram.com/thoughtfulbrewer/'
          target='_blank'
          rel='noopener noreferrer'>
          <Avatar>
            <InstagramIcon/>
          </Avatar>
        </a>
      </Grid>
      <Grid item className={classes.gridItem}>
        <a
          href='https://twitter.com/ThoughtfulBrew'
          target='_blank'
          rel='noopener noreferrer'>
          <Avatar>
            <TwitterIcon/>
          </Avatar>
        </a>
      </Grid>
    </React.Fragment>
  )
}

