import banner from './boyle-cheer.webp'
import React from 'react'

export default {
  title: 'Boyle Cheer',
  subTitle: 'Easy-drinking, holiday beer made for the oh-holy Boyle Bash',
  description: 'Taking inspiration from a seasonal Dunkel, this holiday beer is made with Peaches and Roasted Pecans to bring forth a sweet and malty taste, while being low-ABV and sessionable. This beer was commissioned by the Boyle Brothers for their annual Holiday Boyle Bash!',
  banner: banner,
  seo: 'Thoughtful Brew Recipe: Boyle Cheer',
  route: 'boyle-cheer',
  author: 'Dustin Saunders',
  updated: '2021-05-06',
  references: [
    'http://howtobrew.com/book/introduction',
    'https://www.brewinabag.com/pages/instructions',
  ],
  details: {
    srUnit: 'Imperial',
    strikeAmount: 7,
    batchSize: 5,
    batchType: 'BIAB',
    ibu: 22,
    og: '1.048',
    fg: '1.009',
    abv: 0.052
  },
  mash: {
    strike: 157,
    mash: 151,
    duration: {
      amount: 60,
      unit: 'mins',
    },
    grains: [
      {
        name: 'Wheat Malt',
        type: 'Grain',
        amount: 6,
        ppg: 31,
      },
      {
        name: 'Munich Malt',
        type: 'Grain',
        amount: 3,
        ppg: 30,
      },
      {
        name: 'Chocolate Malt',
        type: 'Grain',
        amount: 0.75,
        ppg: 24,
      },
      {
        name: 'Frozen Peaches (added at flameout)',
        type: 'Fruit',
        amount: 2,
        ppg: 10,
      },
    ],
  },
  boil: {
    duration: {
      amount: 60,
      unit: 'mins',
    },
    hops: [
      {
        name: 'Mt. Hood',
        alphaAcid: 0.057,
        amount: 1,
        schedule: {
          amount: 60,
          unit: 'mins',
        },
      },
      {
        name: 'Mt. Hood',
        alphaAcid: 0.057,
        amount: 1,
        schedule: {
          amount: 10,
          unit: 'mins',
        },
      },
    ],
  },
  ferment: {
    yeast: 'WLP001',
    type: 'White Labs: liquid yeast',
    pitchRate: 0.75,
    starter: true,
    alternative: 'Safale US-04',
    maxTemp: 72,
    minTemp: 68,
  },
  condition: {
    dryHop: {
      duration: {
        amount: 5,
        unit: 'days',
      },
      hops: [
        {
          name: 'Roasted Pecans',
          amount: 8,
        },
      ],
    },
    lager: {
      temp: 36,
      duration: {
        amount: 7,
        unit: 'days',
      },
    },
  },
  equipment: [
    'No-Rinse Sanitizer (Star San, IO Star)',
    'Cleaner (OxyClean)',
    'Full Volume Kettle',
    'Brew-In-A-Bag (Optional, if using BIAB)',
    'Thermometer',
    'Immersion/Counterflow Chiller or Prepared Ice Bath',
    'Siphon/Transfer Mechanism',
    'Hydrometer',
    'Graduated Cylinder',
    'Fermentation Vessel',
    'Airlock',
    'Packaging Equipment (Bottles, Keg)',
    'Recommended: Heat Retardant Gloves',
    'Recommended: Cold Storage for Lagering',
  ],
  method: [
    {
      title: 'SANITIZE',
      step: 'Ensure to clean and sanitize ALL brewing equipment, especially any equipment used POST boil. Recommended sanitizer: Star San, IO Star.', 
    },
    {
      title: 'STRIKE',
      step: 'Heat the full volume of the Strike Water to the expected strike temperature',
    },
    {
      title: 'MASH IN',
      step: 'Once the Strike Water has reached temperature, affix your Brew-In-A-Bag to the Kettle. Slowly pour in all of the grains while stirring gently to break up any clumps.',
    },
    {
      title: 'MASH',
      step: 'Store your Mashing vessel in a heat retaining environment, whether an oven, a large insulated blanket, etc. Wait for the Mash duration.',
    },
    {
      title: 'MASH OUT',
      step: 'Once the Mash duration has finished, retrieve your kettle. Pull the Brew-In-A-Bag from the kettle, ensuring to let all of the additional hot liquor to drain. Gently squeeze the bag to release the remaining hot liquor. Discard spent grains and remove bag from kettle completely.',
    },
    {
      title: 'BOIL',
      step: 'Turn on your heat element and return the lid to the kettle to bring the hot liquor to a boil. Follow the Boil schedule. NOTE: Take care when adding hops as their addition can cause boil overs! Reduce heat slightly while adding any hop additions until you are satisfied the hot liquor will not boil over.',
    },
    {
      title: 'CHILL',
      step: 'Once the Boil has completed, immediately remove your wort from heat and begin to chill your wort using your Immersion or Counterflow Chiller. Optionally, an Ice Bath can be used instead, though it will be slower to cool.',
    },
    {
      title: 'SANITIZE (again)',
      step: 'Ensure your remaining equipment is sanitized as after the boil is when your wort is most vulnerable.',
    },
    {
      title: 'MEASURE OG',
      step: 'Once the wort has cooled to approximately room temperature, remove the wort from the chill area. Transfer your wort to the dedicated, sanitized fermentation vessel. Take a measurement of your Original Gravity (OG) and record.',
    },
    {
      title: 'FERMENTATION',
      step: 'Pitch the yeast. At this point, affix your lid to the wort. Optionally, if you are able, aerate your wort. This has been shown to increase yeast health and start fermentation quicker. Affix your airlock and store in a consistent, temperate, dark area. Next, gather your patience as the yeast gets to work. This can take one to seven days depending on many factors, like yeast health and ambient temperature.',
    },
    {
      title: 'MEASURE FG',
      step: 'Once fermentation has seemed to stop (no airlock activity), take a sample to measure your Final Gravity (FG). If your measurement is not as low as expected, continue to be patient as your yeast may not be complete with fermentation. After 24-48 hours, measure your FG again.',
    },
    {
      title: 'ROAST PECANS',
      step: 'Spread your raw pecans onto a baking sheet, and roast them in an oven at 275\u00B0 F for approximately 30 minutes. Ensure to flip/move the pecans around every 10 minutes or so to ensure an even roast. Ensure Pecans cool before next step.',
    },
    {
      title: 'CONDITION: PECAN ADDITION',
      step: 'Optionally, move your fermented beer to a secondary vessel (secondary racking). Add the Roasted Pecans within the dry hop section to the secondary vessel for the scheduled time.',
    },
    {
      title: 'CONDITION: LAGER',
      step: 'From here, place your beer in cold storage at the appropriate Lagering temperature for the duration AFTER the dry-hop period.',
    },
    {
      title: 'PACKAGE',
      step: 'From here, either bottle or keg your freshly created beer. Enjoy!',
    }
  ],
}

