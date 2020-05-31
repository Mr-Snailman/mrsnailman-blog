import React from 'react'
import Typography from '@material-ui/core/Typography'

const getContent = () =>
  <React.Fragment>
    <Typography paragraph>For over six thousand years, humanity has been making the sweet nectar of beer that brings civilization together. Our far away ancestors first discovered beer through what they thought was a spontaneous event. It is rumored that a storage pot of grains was left out in the rain uncovered and caught a bit of wild yeast floating through the air. The yeast accepted the world's first wort and created the liquid that we love to consume now. Humanity has since thought that there were only three ingredients in beer: Water, Barley, and Hops. Since our technology was not good enough to witness the process of fermentation, the general consensus was that the conversion of wort to beer was spontaneous, when really wild yeast just happened to find a nice home in the wort. Interestingly enough, in the sixteenth century, there was a Bavarian law called the Reinheitsgebot that was passed dictating that beer could ONLY have those three ingredients. If anything else was added to the brew, it was not considered 'Bier.' Although yeast was used in the process before 1906, it was not added to the list of accepted ingredients until then. It took several european scientists touring breweries and explaining the micro-organism and its importance in alcohol creation before Germany changed the law. It was not until 2005 that Germany allowed other ingredients in beer being produced in their country.</Typography>
  <Typography paragraph>Brewing beer is a relatively simple process to understand and a hard skill to master. At its basis, there are four main ingredients: Water; Yeast, which creates alcohol and CO2 from sugars; Barley, which provides the sugars for the yeast; and Hops, the unique ingredient that imparts bitterness and other flavors into the final beer. Brewers mix water and malted or unmalted barley together at a high enough temperature for the starches within the grains to turn to sugar. This process is called Mashing. The sugary mixture is then boiled with hops, to sterilize and immerse the hot liquor in the hops bitterness and flavor. This boiling process takes the hot liquor (Water and Barley) and creates Beer Wort. This wort is finally chilled for the yeast to complete the process called fermentation, which transforms the sugary water into beer!</Typography>
  <Typography paragraph>In our day and age, there are many opportunities for anyone to jump into this ancient skill. Though professional breweries line our liquor store shelves with great beer, there is nothing like cracking open a bottle of your own creation. Homebrewing as an art is like signing your mark on the beer world and is a great gift and privilege. Not only are local homebrew supply stores opening up more and more, but the birth of the internet and the global marketplace makes buying your first homebrew kit and ingredients easier than ever. Taking this understanding of the basics on what this hobby is all about, we will dive into the process in our next article!</Typography>
  </React.Fragment>

export default {
  title: 'Brewing Basics - Ingredients',
  route: 'brewing-basics-ingredients',
  author: 'Dustin Saunders',
  updated: 'June 4, 2020',
  content: getContent(),
  seo: 'Thoughtful Brew Article: Brewing Basics - Ingredients', 
}

