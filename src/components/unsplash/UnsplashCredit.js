import Link from '@material-ui/core/Link'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const UnsplashCredit = (props) => {
  const { author, authorUrl, color, siteUrl, } = props;
  return (
    <Typography color={ color }>
      Photo by <Link color='inherit' href={ authorUrl }>{ author }</Link> on <Link color='inherit' href={ siteUrl }>Unsplash</Link>
    </Typography>
  )
}

UnsplashCredit.defaultProps = {
  author: '...',
  authorUrl: 'https://unsplash.com',
  siteUrl: 'https://unsplash.com',
  color: 'inherit',
}
export default UnsplashCredit 
