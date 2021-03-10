import React from 'react'
import banner from './mocktoberfest.webp'

export default {
  title: 'Mocktoberfest',
  subTitle: 'Styled from the traditional German Lager, this easy-drinking ale will make you shout \'Prost!\'',
  description: 'From the traditional German M\u00E4rzen and Festbier family, this brew takes the same malt, hops and water profile as the original and subs in an ale yeast for fermentation. Keeping to tradition with a twist!',
  banner: banner,
  seo: 'Thoughtful Brew Recipe: Mocktoberfest',
  route: 'mocktoberfest',
  author: 'Dustin Saunders',
  updated: '2021-03-11',
  references: [
    'http://howtobrew.com/book/introduction',
    'https://www.brewinabag.com/pages/instructions',
    'https://beerandbrewing.com/mocktoberfest/',
    'https://www.brewersfriend.com/water-chemistry/',
  ],
  details: {
    srUnit: 'Imperial',
    strikeAmount: 7,
    batchSize: 5,
    batchType: 'BIAB',
    ibu: 17,
    og: '1.051',
    fg: '1.010',
    abv: 0.052,
  },
  mash: {
    strike: 156,
    mash: 149,
    duration: {
      amount: 60,
      unit: 'mins',
    },
    waterAdditions: [
      {
        name: <span>Calcium (Ca<sup>+2</sup>)</span>,
        amount: 50,
      },
      {
        name: <span>Magnesium (Mg<sup>+2</sup>)</span>,
        amount: 5,
      },
      {
        name: <span>Sulfate (SO<sub>4</sub><sup>-2</sup>)</span>,
        amount: 55,
      },
      {
        name: <span>Sodium (Na<sup>+</sup>)</span>,
        amount: 15,
      },
      {
        name: <span>Chloride (Cl<sup>-</sup>)</span>,
        amount: 65,
      },
      {
        name: <span>Bicarbonate (HCO<sub>3</sub><sup>-</sup>)</span>,
        amount: 100,
      },
    ],
    grains: [
      {
        name: '2 Row',
        type: 'Grain',
        amount: 5,
        ppg: 32,
      },
      {
        name: 'Munich',
        type: 'Grain',
        amount: 3,
        ppg: 30,
      },
      {
        name: 'Vienna',
        type: 'Grain',
        amount: 2,
        ppg: 30,
      },
      {
        name: 'Crystal 40L',
        type: 'Grain',
        amount: 0.75,
        ppg: 30,
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
        name: 'Hallertau Mittlefruh',
        alphaAcid: 0.028,
        amount: 1.75,
        schedule: {
          amount: 60,
          unit: 'mins',
        },
      },
      {
        name: 'Hallertau Mittlefruh',
        alphaAcid: 0.028,
        amount: 0.25,
        schedule: {
          amount: 5,
          unit: 'mins',
        },
      },
    ],
  },
  ferment: {
    yeast: 'WLP029',
    type: 'White Labs: liquid yeast',
    pitchRate: 0.75,
    starter: true,
    alternative: 'Safale K-97',
    maxTemp: 70,
    minTemp: 66,
  },
  condition: {
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
      title: 'CONDITION: LAGER',
      step: 'Optionally, move your fermented beer to a secondary vessel (secondary racking). From here, place your beer in cold storage at the appropriate Lagering temperature for the duration.',
    },
    {
      title: 'PACKAGE',
      step: 'From here, either bottle or keg your freshly created beer. Enjoy!',
    }
  ],
}

