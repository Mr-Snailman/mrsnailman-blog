import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  blmContainer: {
    color: '#DDD',
    backgroundColor: '#333',
    padding: theme.spacing(0.75),
  },
  gridItem: {
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  blmLink: {
    color: '#7BF',
  },
}))

const ejlUrl = 'https://support.eji.org/give/153413/#!/donation/checkout'

export default () => {
  const classes = useStyles()
  return (
    <Grid container className={ classes.blmContainer } justify='center'>
      <Grid item className={ classes.gridItem }>
        <Typography>
          Black Lives Matter. <Link
            target='_blank'
            rel='noopener noreferrer'
            className={ classes.blmLink }
            href={ ejlUrl }>
            Support the Equal Justice Initiative.
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}
