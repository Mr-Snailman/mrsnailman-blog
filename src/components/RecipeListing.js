import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import React from 'react'
import recipeList from '../recipes'
import Typography from '@material-ui/core/Typography'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  recipe: {
    padding: theme.spacing(3),
  },
  banner: {
    width: '240px',
    height: '294px',
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
  subTitle: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

const RecipeListing = (props) => {
  const recipesRoute = useSelector(state => state.config.routes.recipes)
  const classes = useStyles()
  const history = useHistory()

  return (
    <Grid container>
      { recipeList && recipeList.length > 0
          ? props.recipeList.map(recipe => 
          <Grid key={ recipe.route } item lg={4} md={6} xs={12} className={ classes.recipe }>
            <Card>
              <CardActionArea style={{ display: 'flex', minHeight: '200px', }} onClick={() => history.push(`${recipesRoute}/${recipe.route}`)}>
                { recipe.banner
                    ? <CardMedia className={ classes.banner } component='img' image={ recipe.banner }/>
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
                        { recipe.title }
                      </Typography>
                      { recipe.subTitle
                          ? <Typography
                            color='inherit'
                            className={ classes.subTitle }>
                            { /** TODO: Should convert to subheader of CardHeader? */ }
                            { recipe.subTitle }
                          </Typography>
                          : null
                      }
                    </React.Fragment>
                  }
                  subheader={`${recipe.author}, ${moment(recipe.updated).format('MMMM Do, YYYY')}`}/>
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

RecipeListing.defaultProps = {
  recipeList: recipeList
}

export default RecipeListing
