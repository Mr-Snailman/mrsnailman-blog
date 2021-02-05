import Grid from '@material-ui/core/Grid'
import { Helmet } from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import React from 'react'
import Seo from '../Seo'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  dungeon: {
    fontFamily: 'Dungeon',
  },
  columnGridItem: {
    textAlign: 'center',
  },
  mainContent: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(),
    },
  },
  blogImage: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(),
      float: 'left',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      paddingBottom: theme.spacing(2),
      width: '90%',
      height: '90%',
      float: 'none',
    },
  },
}))

export default (props) => {
  const { recipe } = props
  const classes = useStyles()
  return (
    <React.Fragment>
      <Seo
        title={ 'Thoughtful Brew - ' + recipe.title }
        description={ recipe.seo }
        path='/contact'
      />
      <Helmet>
        <title>Thoughtful Brew - { recipe.title }</title>
      </Helmet>
      <Grid item xs={12} className={ classes.columnGridItem }>
        <Typography color='inherit' variant='h2' className={ classes.dungeon }>{ recipe.title }</Typography>
        <Typography variant='caption'>{ recipe.author }, { moment(recipe.updated).format('MMMM Do, YYYY') }</Typography>
      </Grid>
      <Grid item xs={12} className={ classes.mainContent }>
        <Typography paragraph>MASH</Typography>
        <Typography paragraph>BOIL</Typography>
        <Typography paragraph>FERMENT</Typography>
        <Typography paragraph>CONDITION</Typography>
        <Typography paragraph>Equipment</Typography>
        <Typography paragraph>Method</Typography>
      </Grid>
    </React.Fragment>
  )
}

