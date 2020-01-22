import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: 64,
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit,
  },
  mainPage: {
    flexGrow: 1,
  },
  mainText: {
    paddingLeft: theme.spacing.unit * 6,
    margin: theme.spacing.unit,
  },
}))
export default () => {
  const email = 'dsaunders2414@gmail.com'
  const publicPath = useSelector((state) => state.config.publicPath)
  const classes = useStyles()
  return (
    <Grid container justify='center' className={ classes.grid }>
      <Grid item xs={6} className={ classes.gridItem }>
        <Paper className={ classes.mainPage }>
          <Typography className={ classes.mainText }>
            <p>You can reach me via my email if you have any questions, concerns, or comments:</p>
            <p>Dustin Saunders, Email: <a href={`mailto:${email}`}>{ email }</a></p>
            <p>Additionally, drop me a line on the following platforms:</p>
          </Typography>
          <Grid container justify='center'>
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
        </Paper>
      </Grid>
    </Grid>
  )
}

