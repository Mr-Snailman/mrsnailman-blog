import Avatar from '@material-ui/core/Avatar'
import dustin from './dustin.jpg'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
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
    [ theme.breakpoints.up('sm') ]: {
      padding: theme.spacing(2),
    },
    [ theme.breakpoints.down('sm') ]: {
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
      <Grid item xs={ 12 } className={ classes.columnGridItem } justify='center' direction='column' alignItems='center'>
        <Avatar
          alt='Dustin Headshot'
          src={ dustin }
          className={ classes.avatarHeadshot }/>
        <Typography>Dustin Saunders</Typography>
        <Typography>Homebrewer, Dad / Engineer, Leader</Typography>
      </Grid>
      <Grid item xs={12} className={ classes.mainTextGridItem }>
        <Typography paragraph>Hello, and welcome to Thoughtful Brew! Thank you for stopping by. Our blog is dedicated to the togetherness and interest around Beer, Brewing and the community surrounding the hobby and profession. This platform is an outlet for our internal musings on beer and beer culture, providing education on the passtime, and storing some of our favorite recipes along our journey.</Typography>
        <Typography paragraph>Our headbrewer, Dustin, is a Software Developer during the day, enjoying solving problems and collaborating with customers and partners to provide solutions. In his spare time, he enjoys the process of homebrewing as well as learning how to become better and improve through continual development of skills and process. Through communication and problem solving, he transcends both his day job and homebrewing to learn and grow while pursuing happiness. When not developing software solutions or homebrewing, he can be found at home with his loving wife and family, learning something new everyday while raising his children, or playing games with friends and family, either virtual or board.</Typography>
        <Typography paragraph>With these pursuits in mind, our mission with Thoughtful Brew is:</Typography>
        <Typography paragraph variant='h3' className={ classes.dungeon }>"Bringing People Together" through Shared Experience and Collaboration</Typography>
        <Typography paragraph>For us, we believe that the pursuit of some greater creation is what drives us. Our focus on Beer and Brewing started as a hobby and grew into a lifestyle: the concept, a means to ideate and use creativity; the research, a means to delve deeper into something interesting; the process, a means to put idle hands to work; and the product, the fruits of our labor. Brewing is an artform and we love to use our tapestry to express. Join us for this journey as we continue to build and grow this endeavor beyond our tiny blog here!</Typography>
      </Grid>
    </React.Fragment>
  )
}

