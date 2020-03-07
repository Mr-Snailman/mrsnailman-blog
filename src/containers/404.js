import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  dungeon: {
    fontFamily: 'Dungeon',
  },
  grid: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
}))
export default () => {
  const homeRoute = useSelector(state => state.config.routes.home)
  const classes = useStyles()
  return (
    <Grid container alignItems='center' className={ classes.grid }>
      <Grid item xs={12}>
        <Typography variant='h5'>Woah, you might've had one too many, my friend! 404, Not Found.</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button component={ NavLink } to={ homeRoute } color='primary' variant='outlined'>Back Home</Button>
      </Grid>
    </Grid>
  )
}
