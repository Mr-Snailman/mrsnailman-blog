import Grid from '@material-ui/core/Grid'
import { Helmet } from 'react-helmet'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import React from 'react'
import Seo from '../Seo'
import Typography from '@material-ui/core/Typography'
import { UNITS } from '../recipes'

const useStyles = makeStyles(theme => ({
  dungeon: {
    fontFamily: 'Dungeon',
  },
  columnGridItem: {
    textAlign: 'center',
  },
  mainContent: {
    width: '85%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(),
    },
  },
  gridItem: {
    paddingBottom: theme.spacing(2),
  },
  methodTitle: {
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
  },
  recipeImage: {
    width: '100%',
    padding: theme.spacing(),
  },
}))

/**
 * Reduce ingredients list from Mash/Boil schedule to total amount
 * of each ingredient by name. Match by name and add amounts.
 */
const reduceIngredients = (values) => values.reduce((acc, value) => {
  const currValue = acc.find(el => value.name === el.name);
  if (currValue) {
    currValue.amount += value.amount
  } else {
    acc.push(value)
  }
  return acc
}, [])

export default (props) => {
  const { recipe } = props
  const classes = useStyles()
  const units = UNITS[recipe.details.srUnit]
  return (
    <React.Fragment>
      <Seo
        title={ 'Thoughtful Brew - ' + recipe.title }
        description={ recipe.seo }
        path='/contact'
      />
      <Helmet>
        <title>Thoughtful Brew - { recipe.title }</title>
      </Helmet>
      <Grid item xs={12} className={ classes.columnGridItem }>
        <Typography color='inherit' variant='h2' className={ classes.dungeon }>{ recipe.title }</Typography>
        <Typography variant='caption'>{ recipe.author }, { moment(recipe.updated).format('MMMM Do, YYYY') }</Typography>
      </Grid>
      <Grid item xs={12} className={ classes.mainContent }>
        <Grid container>
          <Grid item md={6} sm={12} className={ classes.gridItem }>
            <Grid container>
              <Grid item lg={6} md={12}>
                <img className={ classes.recipeImage } src={ recipe.banner } alt='Dont Panic Kolsch'/>
              </Grid>
              <Grid item lg={6} md={12}>
                <Typography>Recipe Type: { recipe.details.batchType }</Typography>
                <Typography>Batch Size: { recipe.details.batchSize }{ units.batch }</Typography>
                <Typography>Strike Water Size: { recipe.details.strikeAmount }{ units.batch }</Typography>
                <Typography>Target Original Gravity (OG): { recipe.details.og }</Typography>
                <Typography>Target Final Gravity (FG): { recipe.details.fg }</Typography>
                <Typography>Target IBU: { recipe.details.ibu }</Typography>
                <Typography>Ingredients List:
                  <List dense disablePadding>
                    { reduceIngredients(recipe.mash.grains).map((el, i) =>
                      <ListItemText key={ i } inset>
                        { el.amount } { units.mash } { el.name }
                      </ListItemText>
                    )}
                    { reduceIngredients(recipe.boil.hops).map((el, i) =>
                      <ListItemText key={ i } inset>
                        { el.amount } { units.boil } { el.name } (~{ el.alphaAcid * 100 }% AA)
                      </ListItemText>
                    )}
                    <ListItemText inset>Yeast: { recipe.ferment.yeast }</ListItemText>
                  </List>
                </Typography>
              </Grid>
              <Grid item>
                <Typography paragraph>{ recipe.description }</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} className={ classes.gridItem }>
            <Typography variant='h6'>Equipment</Typography>
            <List dense disablePadding>
              { recipe.equipment.map(el => <ListItemText key={ el } inset>{ el }</ListItemText>) }
            </List>
          </Grid>
          <Grid item md={6} sm={12} className={ classes.gridItem }>
            <Typography variant='h6'>Mash Details</Typography>
            <Typography>Target Strike Temp: { recipe.mash.strike }&deg; { units.temperature }</Typography>
            <Typography>Target Mash Temp: { recipe.mash.mash }&deg; { units.temperature }</Typography>
            <Typography>Boil Time: { recipe.mash.duration.amount } { recipe.mash.duration.unit }</Typography>
            <Typography paragraph>Grains:
              <List dense disablePadding>
                { recipe.mash.grains.map((el, i) =>
                  <ListItemText key={ i } inset>
                    { el.amount } { units.mash } { el.name } (~{ el.ppg } ppg)
                  </ListItemText>
                )}
              </List>
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} className={ classes.gridItem }>
            <Typography variant='h6'>Boil Details</Typography>
            <Typography>Boil Time: { recipe.boil.duration.amount } { recipe.boil.duration.unit }</Typography>
            <Typography paragraph>Hop Schedule:
              <List dense disablePadding>
                { recipe.boil.hops.map((el, i) => 
                  <ListItemText key={ i } inset>
                    { el.schedule.amount } { el.schedule.unit }: { el.amount } { units.boil } { el.name } (~{ el.alphaAcid * 100 }% AA)
                  </ListItemText>
                )}
              </List>
            </Typography>
          </Grid>
          <Grid item md={6} sm={12} className={ classes.gridItem }>
            <Typography variant='h6'>Fermentation Details</Typography>
            <Typography>Yeast Strain: { recipe.ferment.yeast }</Typography>
            <Typography>{ recipe.ferment.type }</Typography>
            <Typography>Pitch Rate: {recipe.ferment.pitchRate }</Typography>
            <Typography>Alternative: { recipe.ferment.alternative }</Typography>
          </Grid>
          <Grid item md={6} sm={12} className={ classes.gridItem }>
            <Typography variant='h6'>Conditioning Details</Typography>
            { recipe.condition.dryHop
                ? <Typography>Dry Hop: </Typography>
                : null
            }
            { recipe.condition.lager
                ? <React.Fragment>
                  <Typography paragraph>Lager Cold Condition
                    <List dense disablePadding>
                      <ListItemText inset>
                        Temperature: { recipe.condition.lager.temp }&deg; { units.temperature }
                      </ListItemText>
                      <ListItemText inset>
                        Time: { recipe.condition.lager.duration.amount } { recipe.condition.lager.duration.unit }
                      </ListItemText>
                    </List>
                  </Typography>
                </React.Fragment>
                : null
            }
          </Grid>
        </Grid>
        <Grid item xs={12} className={ classes.gridItem }>
          <Typography variant='h6'>Method</Typography>
          { recipe.method.map(el =>
            <Grid key={ el.title } container className={ classes.gridItem }>
              <Grid item sm={2} xs={12} className={ classes.methodTitle }>
                <Typography paragraph><strong>{ el.title }</strong></Typography>
              </Grid>
              <Grid item sm={1}/>
              <Grid item sm={8} xs={12}>
                <Typography>{ el.step }</Typography>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

