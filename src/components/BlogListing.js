import ArticleListing from './ArticleListing'
import blogList from '../blog'
import React from 'react'

const BlogListing = (props) => {
  return (
    <ArticleListing
      articleList={ props.blogList }
      routeBaseSelector={ state => state.config.routes.blog }/>
  )
}

BlogListing.defaultProps = {
  blogList: blogList
}

export default BlogListing
