import React from 'react'
import Typography from '@material-ui/core/Typography'
import stateOfTheBrew from './state-of-the-brew-1.webp'
import stateOfTheBrewBanner from './state-of-the-brew-1-banner.webp'

const getContent = (classes) =>
  <React.Fragment>
    <Typography paragraph><img className={ classes.blogImage } src={ stateOfTheBrew } alt='Grains and Bowl'/> Hello! It has been a bit of time since our last post, but I wanted to catch you up on the state of the brew at Thoughtful Brew. We haven’t posted in a couple weeks, as we look towards our current schedule and figuring out how this blog and general endeavor fits into our lives. This outlet has provided countless lessons already and we want to see it continue to flourish as we provide more content. However, over the past few weeks, time has increasingly been spent in other areas of our lives, though in hindsight, it has been worth it.</Typography>
  <Typography paragraph>Despite the world changing drastically over the last half year, for the few who know us personally, our small world at Thoughtful Brew was set to broaden and expand. As the pandemic started in full swing and quarantine was upon us, we had the difficult task of bringing a new life into this world, our wonderful baby girl. With hospitals being essential, and our local hospital allowing my wife and I to be together in the delivery room, we were beyond grateful that the process went by without a hitch. We both were concerned and anxious that something would go wrong, we would be separated, or any other weird or unforeseen circumstance would follow. Thankfully, the staff took every precaution and nothing untoward beset us. Our baby girl is happy and healthy, and her birth was the least of our worries as the world continued to rapidly change underneath us.</Typography>
  <Typography paragraph>In the time since April when she was born, we have undertaken becoming parents. This is an ever evolving set of mistakes made and lessons learned, and we are definitely learning as we go. The hospital doesn’t exactly give you a manual when you leave with an infant as my wife loves to remind me, but the support of family and friends has been tremendous. The old adage that it takes a village has been proven time and again. Every day brings new experiences and joyous memories that we constantly love and cherish. We wouldn’t have it any other way.</Typography>
  <Typography paragraph>Throughout all of this, we have been posting articles even with these ever changing events, from becoming parents to the pandemic and its slew of new routines and changes in behavior. But now that we have our first series up and complete, we are looking to provide more content that spans the brewing industry, homebrewing tips and tricks, as well as continually reviewing and learning as we build our process and our brand. We will be resuming a semi-regular schedule once again as we continue to expand our website with more interesting topics, some of our homegrown recipes and inspiring stories from our experiences here at Thoughtful Brew.</Typography>
  <Typography paragraph>Our first set of updates will be to our new Recipes section. We plan to have this be our way of providing easy to follow instructions and base recipes to build from and make your own creations. Use them, abuse them, twist them to your liking! We can’t wait to see what the community builds from these as a base!</Typography>
  <Typography paragraph>Additionally, we will continue to provide more advanced topics in homebrewing and commercial brewing as articles in our blog series. These include advanced looks into each of the specific processes that we covered in our Brewing Basics series as well as different techniques or hacks that you can incorporate into your homebrew process. Most of all, we want to hear from you! Do you have further ideas or topics that you want to see us cover? Reach out and hit us up on our social media platforms with any ideas, questions or critiques. Happy brewing!</Typography>
  </React.Fragment>

export default {
  title: 'State of the Brew #1',
  route: 'state-of-the-brew-1',
  author: 'Dustin Saunders',
  updated: '2020-10-22',
  content: getContent,
  banner: stateOfTheBrewBanner,
  seo: 'Thoughtful Brew Article: State of the Brew 1',
}

