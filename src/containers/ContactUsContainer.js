import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(),
  },
  mainText: {
    paddingLeft: theme.spacing(6),
    margin: theme.spacing(),
  },
}))
export default () => {
  const email = 'thoughtfulbrew@gmail.com'
  const publicPath = useSelector((state) => state.config.publicPath)
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className={ classes.mainText }>
        <Typography paragraph>You can reach me via my email if you have any questions, concerns, or comments:</Typography>
        <Typography paragraph>Dustin Saunders, Email: <a href={`mailto:${email}`}>{ email }</a></Typography>
        <Typography paragraph>Additionally, drop me a line on the following platforms:</Typography>
      </div>
      <Grid container justify='center'>
        <SocialMediaIcons/>
        <Grid item className={classes.gridItem}>
          <a
            href='https://github.com/Mr-Snailman'
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar
              alt='Github'
              src={`${publicPath}assets/images/github/GitHub-Mark-32px.png`}/>
          </a>
        </Grid>
        <Grid item className={classes.gridItem}>
          <a
            href='https://exerceo.org'
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar
              alt='Exerceo'
              src={`${publicPath}assets/images/exerceo.png`}/>
          </a>
        </Grid>
        <Grid item className={classes.gridItem}>
          <a
            href='https://linkedin.com/in/dsaunders2414/'
            target='_blank'
            rel='noopener noreferrer'>
            <Avatar
              alt='LinkedIn'
              src={`${publicPath}assets/images/linkedin/In-2C-48px-R.png`}/>
          </a>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

