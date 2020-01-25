import axios from 'axios'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

export default (props = { blogItem: { fileName: '' }}) => {
  const { blogItem } = props
  const publicPath = useSelector(state => state.config.publicPath)
  const [mainContent, setMainContent] = useState('')
  axios.get(publicPath + 'blog/' + blogItem.fileName).then(succ => setMainContent(succ.data))

  return (
    <React.Fragment>
      <Typography>{ blogItem.title }</Typography>
      <Typography>{ blogItem.subTitle }</Typography>
      <Typography>By: { blogItem.author }, Updated: { blogItem.updated }</Typography>
      { mainContent
          ? <ReactMarkdown source={ mainContent }/>
          : <Typography>Loading...</Typography>
      }
    </React.Fragment>
  )
}
