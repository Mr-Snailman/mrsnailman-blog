import React from 'react'
import Typography from '@material-ui/core/Typography'
// TODO: Packaging Images
import packaging from './packaging.webp'
import packagingBanner from './packaging-banner.webp'

const getContent = (classes) =>
  <React.Fragment>
    <Typography paragraph><img className={ classes.blogImage } src={ packaging } alt='Packaging' align='left' /> Packaging is the last major step in the brewing process. In order to prepare the beer for consumption, a brewer must decide the intended method for serving the beer: whether a tapped keg at your favorite watering hole, or cans or bottles to be served later. Once the beer is conditioned, it needs to be carbonated for consumption.</Typography>
  <Typography paragraph> For most starting homebrewers, the most common method is to bottle condition beer. Homebrew kits will come with a bottling bucket and usually a way to fill the bottle from the bottom up. It is highly important to clean and sanitize ALL bottles before transferring the beer into them. Each bottle introduces a new surface for the finished product to become contaminated. This is usually the most tedious part of the whole process, as it becomes a LOT of bottles to clean and sanitize!</Typography>
  <Typography paragraph> In order to carbonate the beer, simple sugar should be boiled and added to the finished product in order to give the yeast some food to turn into carbon dioxide (CO2). This simple sugar will most likely be priming sugar from your local homebrew store which is just corn sugar. White table sugar will work as well, though a brewer will need to double check the amounts to add. If too much sugar is added to the beer at this time, each bottle could be a ticking time bomb that over carbonates and/or explodes, so it is important to keep this sugar amount just right. It will take time to carbonate, so be patient! A normal batch will take around two weeks to carbonate, so although it is tempting to try the beer earlier, it will normally not be carbonated fully and still be quite flat, which will impact the final taste greatly.</Typography>
  <Typography paragraph> Once your patience pays off, taste your final product! It is great to finally taste and enjoy what you have made yourself. Take notes on what you like about each beer you make or how you could improve the flavor. It becomes a great way to improve your recipes and process by looking back over everything that went well as well as any mistakes to learn from along the journey. Share your experiences, with us and others as you continue down your own journey. We can’t wait to hear your stories!</Typography>
  </React.Fragment>

export default {
  title: 'Brewing Basics - Packaging',
  route: 'brewing-basics-packaging',
  author: 'Dustin Saunders',
  updated: '2020-08-27',
  content: getContent,
  banner: packagingBanner,
  seo: 'Thoughtful Brew Article: Brewing Basics - Packaging', 
}

