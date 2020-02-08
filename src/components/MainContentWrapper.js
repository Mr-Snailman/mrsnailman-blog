import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import React from 'react'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingTop: 64,
    overflow: 'auto',
    maxHeight: '100vh',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(), 
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
  mainPage: {
    flexGrow: 1,
  },
}))
export default (props) => {
  const classes = useStyles()
  return (
    <Grid container justify='center' className={ classes.grid }>
      <Grid item sm={12} md={10} className={ classes.gridItem }>
        <Paper className={ classes.mainPage }>
          { props.children }
        </Paper>
      </Grid>
    </Grid>
  )
}

