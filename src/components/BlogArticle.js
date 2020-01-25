import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  dungeon: {
    fontFamily: 'Dungeon',
  },
  columnGridItem: {
    textAlign: 'center',
  },
  mainContent: {
    padding: theme.spacing(2),
  }
}))

export default (props = { blogItem: { fileName: '' }}) => {
  const { blogItem } = props
  const classes = useStyles()
  const publicPath = useSelector(state => state.config.publicPath)
  const [mainContent, setMainContent] = useState('')
  axios.get(publicPath + 'blog/' + blogItem.fileName).then(succ => setMainContent(succ.data))

  return (
    <React.Fragment>
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
        <Typography variant='caption'>{ blogItem.author }, { blogItem.updated }</Typography>
      </Grid>
      <Grid item xs={12} className={ classes.mainContent }>
        { mainContent
            ? <ReactMarkdown source={ mainContent }/>
            : <Typography>Loading...</Typography>
        }
      </Grid>
    </React.Fragment>
  )
}