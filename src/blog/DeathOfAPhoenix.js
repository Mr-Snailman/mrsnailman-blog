import React from 'react'
import { TatianaRodriguez } from '../components/unsplash/'
import Typography from '@material-ui/core/Typography'
import deathOfAPhoenix from './death-of-a-phoenix.webp'
import deathOfAPhoenixBanner from './death-of-a-phoenix-banner.webp'

const getContent = (classes) =>
  <React.Fragment>
    <div>
      <div className={ classes.blogImage }>
        <img className={ classes.blogImage }src={ deathOfAPhoenix } alt='Brewery Table'/><TatianaRodriguez/>
      </div>
      <Typography paragraph>Dogfish Head has been one of the most influential breweries to hit the Craft Beer industry in the past twenty-five years. It has stood as a pillar of ingenuity, innovation and standing off-centered from a typical micro-brewery. And yet, almost one and a half years ago, this titan for freedom and creativity merged with the Boston Beer company, merging the two companies under one legal umbrella. Both breweries would stand separate, with each leveraging the other’s strengths: Dogfish for its innovation, Boston for its distribution; while also offsetting each other’s weaknesses. At least, that was the perception that was marketed by both companies.</Typography>
    </div>
    <Typography paragraph>I’ve always been a huge fan of Dogfish Head ever since first trying their flagship 60 Minute Imperial Pale Ale (IPA). It wasn’t the first beer that I had ever tried, but it was one of the first IPAs that I truly enjoyed. Beer was still new to me, so it blew my uninitiated mind that a beer could be that flavorful. This was also way before I even knew the difference between a Cascade and a Centennial hop. I only slightly know the difference now. Alternatively, Sam Adams Boston Lager isn’t my first choice, but it is always a solid beer. I cannot say much about the rest of their line up as I am not as familiar with them, but I’ve never been steered wrong by any others that I have tried, like Rebel IPA.</Typography>
    <Typography paragraph>We live close enough to Dogfish Head’s location in Milton, DE that we can make a nice weekend trip out of the experience. Safe to say, we have been up there countless times to explore downtown Lewes, Milton, and Rehoboth on multiple occasions, each time, visiting and enjoying good beer, good food and good company all around. We have gotten to watch the evolution of the Brewing &amp; Eats Pub to the tri-tiered Chesapeake &amp; Maine, Beer Garden and Pub that it is today. We’ve watched the birth and success of the Dogfish Distillery line of spirits. The brewery itself has expanded dramatically since our first visits, adding multiple fermentation and bright tanks, crafting their own kitchen from Paul Bunyan’s Lunchbox Food Truck, all the while, remaining true to their beliefs and values. Family first, fun second, and success will follow. </Typography>
    <Typography paragraph>Our most recent trip to Lewes and Rehoboth was lackluster compared to the past. Granted, we are still in a pandemic, so with social distancing and reserved outdoor seating, the experience was due to be a bit different this time. No free samples with a free tour, no light-hearted excursions into the guts of the brewery itself, but still the same set of values did shine through from the staff: family first, community first. Additionally, the food was amazing as it always is. The roots from the original brew pub continue to shine through their amazing food.</Typography>
    <Typography paragraph>One major thing that I noticed immediately was the tap list. Despite their years of service to the industry, and years of exclusives and off-centered beers on tap, their listing was relatively uneventful. There wasn’t anything on the list that seemed so off-the-wall that I hadn’t tried something similar before. Even with their new set of spirits and cocktails, I was surprised to find nothing of note or interest beyond the usual. And I can’t help but wonder why the list looked so familiar, so uneventful. And despite their brand emblazoned everywhere, despite their logo sprayed on the side of the building, large for all to see, one thing stuck with me. As our waiter turned around, a small logo was displayed on her sleeve, something you wouldn’t see if she turned too quickly. Boston Beer Company. small letters, same Dogfish font. I finished my tasting, and we left.</Typography>
    <Typography paragraph>And I can’t help but wonder what will happen to this nostalgic place that I adore, this brand that is changing. I know their flagship series of year round beers will continue to be excellent. Their twenty-five years in the industry shows they know how to make consistently good beer. And I know that I will continue to see Dogfish and Sam Adams beer side by side in more places across the globe. Their distribution will continue to thrive with this merger. What my intuition can’t let go is the nagging feeling that the death of something once beautiful is fast approaching. The death of the small brew pub exclusives that become the next best beer in their taprooms and distribution channels. The gone conversations with the staff in Rehoboth after one too many drinks, talking about how the orange froth on the top of a cocktail really brings out the flavor of the whiskey. The rare, six to nine year old 120 Minute IPA that they had this weekend for an exclusive sale, which I ultimately bought.</Typography>
    <Typography paragraph>But, in all of this, I think that Dogfish has been through worse. They have gone through so much in their history that this would be the time to once again brush off the ashes of the past and bring a new set of beautiful designs forward. This merger should be a good thing for both companies, and I know from personal experience that mergers and/or acquisitions are never easy. I only hope that their beer in the taproom is a bit better the next time that we visit.</Typography>
  </React.Fragment>

export default {
  title: 'Death of a Phoenix',
  route: 'death-of-a-phoenix',
  author: 'Dustin Saunders',
  updated: '2020-11-06',
  content: getContent,
  banner: deathOfAPhoenixBanner,
  seo: 'Thoughtful Brew Article: Death Of a Phoenix',
}

