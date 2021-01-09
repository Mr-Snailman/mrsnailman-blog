import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'
import { MarkusSpiske } from '../components/unsplash/'
import Paper from '@material-ui/core/Paper'
import { push } from 'connected-react-router'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  contactGrid: {
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
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
  const dispatch = useDispatch()

  return (
    <Grid container justify='center'>
      <Grid item sm={12} md={10} className={ classes.gridItem }>
        <Paper className={ classes.mainPage }>
          { props.children }
          { currentRoute.pathname !== '/contact' 
              ? <Grid container>
                <Grid item xs={12} className={ classes.contactGrid }>
                  <Typography>Have a question or a comment?</Typography>
                  <Button color='secondary' onClick={ () => dispatch(push(contactUsRoute)) }>Contact Us</Button>
                </Grid>
              </Grid>
              : null
          }
        </Paper>
      </Grid>
      <Grid item sm={12} md={10} className={ classes.gridItem }>
        <Hidden smDown>
          <MarkusSpiske/>
        </Hidden>
      </Grid>
    </Grid>
  )
}

