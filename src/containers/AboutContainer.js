import Avatar from '@material-ui/core/Avatar'
import dustin from './dustin.jpg'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import React from 'react'
import Seo from '../Seo'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  avatarHeadshot: {
    margin: 10,
    height: 100,
    width: 100
  },
  columnGridItem: {
    display: 'flex',
    padding: theme.spacing(),
  },
  dungeon: {
    fontFamily: 'Dungeon',
    textAlign: 'center',
  },
  mainTextGridItem: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(),
      alignItems: 'center',
      textAlign: 'center',
    },
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Seo
        title='Thoughtful Brew - About'
        description='About the author, Dustin Saunders, who writes for the Thoughtful Brew Blog.'
        path='/about'
      />
      <Grid item xs={12} className={classes.columnGridItem} justify='center' direction='column' alignItems='center'>
        <Avatar
          alt='Dustin Headshot'
          src={ dustin }
          className={classes.avatarHeadshot}/>
        <Typography>Dustin Saunders</Typography>
        <Typography>Leader, Mentor</Typography>
        <Typography>Software Engineer</Typography>
        <Typography>Homebrewer, Entrepreneur</Typography>
      </Grid>
      <Grid item xs={12} className={ classes.mainTextGridItem }>
        <Typography paragraph>Hello, and welcome to Thoughtful Brew! Thank you for taking the time to check us out. We are a blog dedicated to the togetherness and interest around Beer, Brewing and the community surrounding the hobby and profession. We envision this platform becomes an outlet for our internal musings on beer and beer culture, educating the general public on the growing passtime, as well as providing a great place to discuss topics and trends within the industry.</Typography>
        <Typography paragraph>My name is Dustin, and I am a Software Developer during the day, enjoying solving problems and collaborating with customers and partners to provide solutions. Although, in my spare time, I enjoy the process of homebrewing as well as learning how to become better and improve through continual development of my skills and process. There is a problem solving aspect to most parts of life, and I find that brewing is no different. I also believe that:</Typography>
        <Typography paragraph variant='h3' className={ classes.dungeon }>Beer brings people together.</Typography>
        <Typography paragraph>I stand by this, and it is the main reason why I am starting this endeavor. My goal is to continue this mantra through quality content and education of the brewing industry, the brewing process and the people that surround it. I hope to continue the conversation as it has been for years and years and invite others to participate along the way.</Typography>
        <Typography paragraph>Feel free to reach out via our <Link to="/contact" component={ NavLink }>Contact Us Page</Link> with any questions, concerns or comments. Thanks again for your continued support!</Typography>
      </Grid>
    </React.Fragment>
  )
}

