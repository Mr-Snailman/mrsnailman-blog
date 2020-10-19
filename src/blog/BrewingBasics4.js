import React from 'react'
import Typography from '@material-ui/core/Typography'
import fermentation from './fermentation.webp'
import fermentationBanner from './fermentation-banner.webp'

const getContent = (classes) =>
  <React.Fragment>
    <Typography paragraph><img className={ classes.blogImage } src={ fermentation } alt='Fermentation'  /> Once we have boiled the wort with hops, the wort is ready to be cooled for fermentation. Because our yeast is temperature sensitive and will die at boiling temperatures, we need to cool down the wort as quickly as possible. Most yeast ferment at temperatures around 65-75&deg; F (18-24&deg; C). It is imperative that the wort is chilled as quickly as possible, as the longer it takes to cool off, the more that the wort is exposed to external forces, like bacteria or wild yeast floating in the air. These both will cause off-flavors and/or infection to occur. These are NOT what we want in our brew. The major way that an avid homebrewer can combat this is using ice baths on the brew kettle or through specifically designed chillers, whether immersion or counterflow. As a homebrewer, cooling off your wort in under one hour is acceptable, but quicker is better. Any time beyond one hour usually will lead to problems with the beer.</Typography>
  <Typography paragraph> Once the wort has chilled to the appropriate temperature, the wort should be transferred into your fermentation vessel with the yeast. The yeast needs oxygen in order to start the chemical process of fermentation. It is advised to add oxygen to your freshly pitched yeast and wort combination by either shaking/stirring the fermentation vessel, or using an oxygen pump. Though it is highly recommended to add this extra step to the process, it is not mandatory, though it can increase the consistency and utilization of the yeast.</Typography>
  <Typography paragraph> Finally, the fermentation vessel will need to be sealed with an air lock. Fermentation from yeast can take anywhere from four to seven days for normal yeast strains. Ambient temperature, yeast health, wort gravity and many other factors play a huge part in how the yeast perform and how long the process can take. The major things to keep in mind are maintaining a constant temperature, as well as keeping the air lock intact. This should keep the fermentation healthy and uncontaminated. Once the fermentation is complete, it is important to measure the Final Gravity of the beer in order to determine the ABV. After fermentation, our beer is ready to be Conditioned, which we will talk about in our next article!</Typography>
  </React.Fragment>

export default {
  title: 'Brewing Basics - Fermentation',
  route: 'brewing-basics-fermentation',
  author: 'Dustin Saunders',
  updated: '2020-07-30',
  content: getContent,
  banner: fermentationBanner,
  seo: 'Thoughtful Brew Article: Brewing Basics - Fermentation', 
}

