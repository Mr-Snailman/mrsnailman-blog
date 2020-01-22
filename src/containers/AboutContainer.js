import Avatar from '@material-ui/core/Avatar'
import {connect} from 'react-redux'
import Grid from '@material-ui/core/Grid'
import React from 'react'
import Typography from '@material-ui/core/Typography'
import {withRouter} from 'react-router'
import {withStyles} from '@material-ui/core/styles'

const styles = (theme) => {
  return {
    avatarHeadshot: {
      margin: 10,
      height: 100,
      width: 100
    },
    gridItem: {
      display: 'flex',
      justifyContent: 'center',
      padding: theme.spacing.unit,
    },
    columnGridItem: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing.unit,
    },
    mainTextGridItem: {
      padding: theme.spacing.unit,
    }
  }
}

class LandingContainer extends React.Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment>
        <Grid item xs={12} className={classes.gridItem}>
          <Avatar
            alt='Dustin Headshot'
            src={`${this.props.publicPath}assets/images/dustin.jpg`}
            className={classes.avatarHeadshot}/>
        </Grid>
        <Grid item xs={12} className={classes.columnGridItem}>
          <Typography>Software Engineer, Mentor, Leader</Typography>
          <Typography>Homebrewer, Entrepreneur</Typography>
        </Grid>
        <Grid item xs={12} className={ classes.mainTextGridItem }>
          <Typography paragraph>Truly believing in and valuing the success of others through collaborative hard work and learning, Dustin is a driven and passionate leader that has taken his years in the IT industry to constantly learn, grow, and give back through teaching and mentoring. In his everyday work at Interclypse, Dustin works as a Software Engineer and Technical Leader on several projects. One of his passions is realized at Exerceo, a 501c(3) non-profit, where he strongly advocates for active mentorship in and out of the work place by leading the Software Engineering Program. Interested in everything information technology related, including software engineering, cybersecurity, and system administrator, Dustin is a strong, passionate software engineering candidate.</Typography>
          <Typography paragraph>Outside of the office, Dustin spends his time as a Homebrewer, practicing and mastering his craft through continual learning and growth through hands-on experience. He is constantly looking for the next big beer to brew, how different ingredients fit into existing recipes and themes, and finally how he can break the traditional and craft mold even further through Extreme Brewing.</Typography>
          <Typography paragraph>He additionally loves rock climbing (indoor and outdoor), Dungeons and Dragons, and general Science Fiction/Fantasy genres across all media.</Typography>
          <Typography paragraph>Besides his loving and patient wife, he lives with two rapscallion cats, Chester and Hobbes.</Typography>
        </Grid>
      </React.Fragment>
    )
  }
}

export default withRouter(connect(
  (state, props) => {
    return {
      publicPath: state.config.publicPath
    }
  },
  (dispatch, props) => {
    return {
    }
  }
)(withStyles(styles)(LandingContainer)))
