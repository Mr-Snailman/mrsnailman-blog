import ArticleListing from './ArticleListing'
import React from 'react'
import recipeList from '../recipes'

const RecipeListing = (props) => {
  return (
    <ArticleListing
      routeBaseSelector={ state => state.config.routes.recipes }
      articleList={ props.recipeList }
      height={ 294 }
      width={ 240 }
      display='flex'
      breakpoints={{ xl: 4, lg: 6, md: 12 }}/>
  )
}

RecipeListing.defaultProps = {
  recipeList: recipeList
}

export default RecipeListing
