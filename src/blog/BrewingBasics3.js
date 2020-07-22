import React from 'react'
import Typography from '@material-ui/core/Typography'
import boiling from './boiling.webp'
import boilingBanner from './boiling-banner.webp'

const getContent = (classes) =>
  <React.Fragment>
    <Typography paragraph><img className={ classes.blogImage } src={ boiling } alt='Boiling' align='left' /> After a brewer has finished Mashing his grains, the wort produced is ready to enter the Boiling phase. Although the mashing temperature of 140-160&deg; F (60-70&deg; C) will remove most bacteria and unwanted molecular substances, we must sterilize the wort so that the yeast can enter a bacteria free environment. Additionally, during the boil, we are able to infuse the beautiful hop character that some styles are known for.</Typography>
    <Typography paragraph>At this time in the process, it is necessary to raise the heat of the wort to boiling temperatures, around 212&deg; F (100&deg; C). The more vigorous that the boil is, the more hop flavor and aroma will be imparted upon the wort through isomerization. A nice, rolling boil will suffice for most brews, meaning a boil that is rolling across the top of the surface without bubbling up and over the pot recklessly, but maintaining a constant convection flow in the boil. One problem to avoid while boiling are called boil overs, which involve the wort becoming too hot and the wort bubbling up and over the sides of the pot. Because wort is primarily sugar water, any boil overs can be a serious mess to clean up. We’ll discuss this topic in more detail in a later article, while providing steps to mitigate any future boil overs.</Typography>
    <Typography paragraph>Beyond sterilizing the beer, hops additions are done during the boil to impart unique flavors upon the beer. The majority of recipes constitute that the optimal time for boiling wort is sixty minutes in order to achieve the best hop profile. This is not a hard and fast rule and can definitely be used as a variable in experimentation. Hops added earlier in the boil will increase bitterness in the beer, while hops added later will increase aroma. This is why fruity, aromatic hops are used to give a beer a distinct flavor, while hops added for bitterness will have a higher alpha acid content. One of the best methods to figure out which hops work best for a brewer is to try different varieties and combinations, and modify existing recipes to experiment. Take time to smell, feel, and even taste the hops before using them to truly understand how they may impart flavor or bitterness into the beer. The next big hop combination is out there waiting to be discovered!</Typography>
    <Typography paragraph>At the end of the boiling process, the wort now has isomerized with hops, and will impart new bitterness and aroma on the final product. But before the wort can be drunk, we need to ferment it with yeast! make sure to chill your wort down  and transfer it to the next article, where we discuss the magical process of Fermentation.</Typography>
  </React.Fragment>

export default {
  title: 'Brewing Basics - Boiling',
  route: 'brewing-basics-boiling',
  author: 'Dustin Saunders',
  updated: 'July 2, 2020',
  content: getContent,
  banner: boilingBanner,
  seo: 'Thoughtful Brew Article: Brewing Basics - Boiling',
}

