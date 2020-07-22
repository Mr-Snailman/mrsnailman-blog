import blogList from '../blog'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
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
  blogBanner: {
    height: '182px',
  },
  noContent: {
    textAlign: 'center',
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
      { blogList && blogList.length > 0
          ? props.blogList.map(blogItem => 
          <Grid key={ blogItem.route } item lg={4} md={6} xs={12} className={ classes.blogItem }>
            <Card>
              <CardActionArea style={{ minHeight: '200px', }} onClick={() => history.push(`${blogRoute}/${blogItem.route}`)}>
                { blogItem.banner
                    ? <CardMedia className={ classes.blogBanner } component='img' image={ blogItem.banner }/>
                    : null
                }
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
              </CardActionArea>
            </Card>
          </Grid>)
          : <Grid xs={12} item className={ classes.noContent }>
            <Typography>Content coming soon!</Typography>
          </Grid>
      }
    </Grid>
  )
}

BlogListing.defaultProps = {
  blogList: blogList
}

export default BlogListing
