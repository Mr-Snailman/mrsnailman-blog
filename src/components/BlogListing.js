import blogList from '../blogList'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  blogItem: {
    padding: theme.spacing(3),
  },
  cardHeader: {
    textAlign: 'center',
  },
  dungeon: {
    fontFamily: 'Dungeon',
  },
}))

const BlogListing = (props) => {
  const blogRoute = useSelector(state => state.config.routes.blog)
  const classes = useStyles()
  const history = useHistory()

  return (
    <Grid container>
      { props.blogList.map(blogItem => 
        <Grid key={ blogItem.route } item xs={3} className={ classes.blogItem }>
          <Card>
            <CardActionArea onClick={() => history.push(`${blogRoute}/${blogItem.route}`)}>
              <CardHeader
                className={ classes.cardHeader }
                title={
                  <React.Fragment>
                    <Typography
                      color='inherit'
                      variant='h3'
                      className={ classes.dungeon }>
                      { blogItem.title }
                    </Typography>
                    { blogItem.subTitle
                        ? <Typography
                          color='inherit'
                          variant='h4'
                          className={ classes.dungeon }>
                          { blogItem.subTitle }
                        </Typography>
                        : null
                    }
                  </React.Fragment>
                }
                subheader={`${blogItem.author}, ${blogItem.updated}`}/>
              <CardContent>{ blogItem.preview }</CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </Grid>
  )
}

BlogListing.defaultProps = {
  blogList: blogList
}

export default BlogListing
