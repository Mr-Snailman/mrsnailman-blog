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
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
  },
}))

export default (props) => {
  const { blogItem } = props
  const classes = useStyles()
  return (
    <React.Fragment>
      <Seo
        title={ 'Thoughtful Brew - ' + blogItem.title }
        description={ blogItem.seo }
        path='/contact'
      />
      <Helmet>
        <title>Thoughtful Brew - { blogItem.title }</title>
      </Helmet>
      <Grid item xs={12} className={ classes.columnGridItem }>
        <Typography color='inherit' variant='h2' className={ classes.dungeon }>{ blogItem.title }</Typography>
        { blogItem.subTitle
            ? <Typography paragraph
              color='inherit'
              variant='h5'
              className={ classes.dungeon }>
              { blogItem.subTitle }
            </Typography>
            : null
        }
        <Typography variant='caption'>{ blogItem.author }, { moment(blogItem.updated).format('MMMM Do, YYYY') }</Typography>
      </Grid>
      <Grid item xs={12} className={ classes.mainContent }>
        { blogItem.content(classes) }
      </Grid>
    </React.Fragment>
  )
}

