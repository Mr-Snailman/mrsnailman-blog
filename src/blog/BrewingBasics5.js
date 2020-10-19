import React from 'react'
import Typography from '@material-ui/core/Typography'
import conditioning from './conditioning.webp'
import conditioningBanner from './conditioning-banner.webp'

const getContent = (classes) =>
  <React.Fragment>
    <Typography paragraph><img className={ classes.blogImage } src={ conditioning } alt='Conditioning'  /> Once fermentation has completed, our brew is ready for conditioning. The yeast completes the fermentation process in a mad dash. Not only is it super hungry and eager to eat up all of the sugars during fermentation, it does so while producing many other compounds that are left over. Some of these are wanted, but others are not, whether creating off-flavors or infections. The process of conditioning is meant to allow the yeast time after primary fermentation to clean up after itself, removing the majority of these compounds.</Typography>
  <Typography paragraph> Though brewers may refer to this process as secondary fermentation, it is a common misconception. Secondary racking is the process of moving the beer into a separate vessel. This allows the yeast to complete this clean up without the additional leftover hops and malt, called trub, that accumulates at the bottom of the fermentation vessel. Many brewers will swear by this process, while others believe it is not worth the risk of infection. If you have a clean and sanitized process, either method can work well depending on personal preference. Depending on the style that is brewed, it may be better to keep the beer on the trub during the conditioning phase, for example a low flocculating wheat beer. This is definitely another area for experimentation, so feel free to explore!</Typography>
  <Typography paragraph> Conditioning can be skipped if the brewer finds that the finished beer is to taste, though it is usually recommended to allow at least one week as a ballpark time frame. This process can take longer if the beer has a higher ABV, since the yeast has to work harder through the higher alcohol content. It is ultimately up to the brewer to know when the beer is ready through tasting at each stage until it comes out just right. Once that state has been reached, the beer is ready to be packaged up and enjoyed!</Typography>
  </React.Fragment>

export default {
  title: 'Brewing Basics - Conditioning',
  route: 'brewing-basics-conditioning',
  author: 'Dustin Saunders',
  updated: '2020-08-13',
  content: getContent,
  banner: conditioningBanner,
  seo: 'Thoughtful Brew Article: Brewing Basics - Conditioning', 
}

