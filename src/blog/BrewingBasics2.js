import React from 'react'
import Typography from '@material-ui/core/Typography'
import mashing from './mashing.webp'
import mashingBanner from './mashing-banner.webp'

const getContent = () =>
  <React.Fragment>
    <Typography paragraph><img style={{ padding: '1rem', }} src={ mashing } alt='Mashing' align='left' /> Mashing is the first step in the brewing process and is much like making tea with grains. The most common malted grain is barley, and Maltsters are in charge of kilning freshly harvested barley to activate enzymes and caramelize sugars for brewing. The enzymes and sugar that are activated from the original kilning lay dormant while in storage, but will reactivate in water at temperatures around 140-160&deg; F (60-70&deg; C), taking starches found in the grains and converting them into fermentable sugars for the yeast. Brewers are looking for a particular malt profile based on the recipe, which will be provided to the yeast to convert into alcohol during fermentation.</Typography>
  <Typography paragraph>These malted grains created by Maltsters are roasted through a kiln in order to produce different flavor profiles based on how long or how hot the grains are roasted. The longer the grains are roasted, the darker the malt, and more caramel notes will result in the grains. Additionally, the color profile will be much darker the longer that a particular grain is roasted. This color is imparted directly into the beer, and is why Stouts and Porters are known as being so dark, whereas Pilsners and Lagers are much lighter in color. As mentioned, barley is the most common malted or unmalted grain, but malted or unmalted wheat can also be kilned and used by brewers. Additionally, other unmalted and unkilned grains like corn and rice can be used in a brew as well, though these are used to impart specific flavors only.</Typography>
  <Typography paragraph>Though there are many avenues for the malting process, whether using Malt Extract or an All-Grain strategy, which we will cover in a later post, Mashing your grains is only the first step in the process of brewing. Stayed tuned for the next part of the process, Boiling!</Typography>
  </React.Fragment>

export default {
  title: 'Brewing Basics - Mashing',
  route: 'brewing-basics-mashing',
  author: 'Dustin Saunders',
  updated: 'June 18, 2020',
  content: getContent(),
  banner: mashingBanner,
  seo: 'Thoughtful Brew Article: Brewing Basics - Mashing', 
}

