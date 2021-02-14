import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  actionArea: {
    minHeight: 200,
    display: props => props.display, 
  },
  articleBanner: {
    width: props => props.width || null,
    height: props => props.height,
  },
  articleItem: {
    padding: theme.spacing(3),
  },
  cardHeader: {
    textAlign: 'center',
  },
  dungeon: {
    fontFamily: 'Dungeon',
  },
  noContent: {
    textAlign: 'center',
  },
  subTitle: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

const ArticleListing = (props) => {
  const { articleList, routeBaseSelector } = props
  const articleRouteBase = useSelector(routeBaseSelector)
  const classes = useStyles(props)
  const history = useHistory()

  return (
    <Grid container>
      { articleList && articleList.length > 0
          ? articleList.map(articleItem => 
          <Grid key={ articleItem.route } item lg={4} md={6} xs={12} className={ classes.articleItem }>
            <Card>
              <CardActionArea
                className={ classes.actionArea }
                onClick={() => history.push(`${articleRouteBase}/${articleItem.route}`)}>
                { articleItem.banner
                    ? <CardMedia className={ classes.articleBanner }
                        component='img'
                        image={ articleItem.banner }
                        height={ props.height }
                        width={ props.width }/>
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
                        { articleItem.title }
                      </Typography>
                      { articleItem.subTitle
                          ? <Typography
                            color='inherit'
                            className={ classes.subTitle }>
                            { articleItem.subTitle }
                          </Typography>
                          : null
                      }
                    </React.Fragment>
                  }
                  subheader={`${articleItem.author}, ${moment(articleItem.updated).format('MMMM Do, YYYY')}`}/>
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

ArticleListing.defaultProps = {
  articleList: [],
  routeBaseSelector: state => state.config.routes.home,
  height: 182,
  display: 'block',
}

export default ArticleListing
