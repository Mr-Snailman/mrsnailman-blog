import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  contactGrid: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  },
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
  const contactUsRoute = useSelector(state => state.config.routes.contact)
  const currentRoute = useSelector(state => state.router.location)
  const history = useHistory()
  return (
    <Grid container justify='center' className={ classes.grid }>
      <Grid item sm={12} md={10} className={ classes.gridItem }>
        <Paper className={ classes.mainPage }>
          { props.children }
          { currentRoute.pathname !== '/contact' 
              ? <Grid container>
                <Grid item xs={12} className={ classes.contactGrid }>
                  <Typography>Have a question or a comment?</Typography>
                  <Button color='primary' variant='outlined' onClick={ () => history.push(contactUsRoute) }>Contact Us</Button>
                </Grid>
              </Grid>
              : null
          }
        </Paper>
      </Grid>
    </Grid>
  )
}

