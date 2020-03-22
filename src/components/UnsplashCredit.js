import Link from '@material-ui/core/Link'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const authorUrl = 'https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
const siteUrl = 'https://unsplash.com/s/photos/hops?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
export default () =>
  <Typography color='inherit'>
    Photo by <Link color='inherit' href={ authorUrl }>Markus Spiske</Link> on <Link color='inherit' href={ siteUrl }>Unsplash</Link>
  </Typography>

