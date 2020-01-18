import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: 64,
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing.unit,
  }
}))
export default () => {
  const classes = useStyles()
  return (
    <Grid container justify='center' className={ classes.grid }>
      <Grid item xs={12} className={ classes.gridItem }>
        <Paper>
          <Typography>Coming Soon!</Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}
