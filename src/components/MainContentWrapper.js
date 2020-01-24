import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import React from 'react'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: 64,
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(),
  },
  mainPage: {
    flexGrow: 1,
  },
}))
export default (props) => {
  const classes = useStyles()
  return (
    <Grid container justify='center' className={ classes.grid }>
      <Grid item lg={10} md={8} xs={6} className={ classes.gridItem }>
        <Paper className={ classes.mainPage }>
          { props.children }
        </Paper>
      </Grid>
    </Grid>
  )
}

