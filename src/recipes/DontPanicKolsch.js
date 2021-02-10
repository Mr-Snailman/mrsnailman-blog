import banner from './dont-panic-kolsch.webp'

export default {
  title: 'Don\'t Panic Kolsch',
  subTitle: 'Light colored ale; mildly hopped and lager conditioned for crispness',
  description: 'This light colored ale makes homage to the original Kolsch style. With Glacier hops, the 2-Row Pilsner grains provide a platform to explore the process over style in this traditional brew.',
  banner: banner,
  seo: 'Thoughtful Brew Recipe: Don\'t Panic Kolsch',
  route: 'dont-panic-kolsch',
  author: 'Dustin Saunders',
  updated: '2021-02-11',
  references: [
    'http://howtobrew.com/book/introduction',
    'https://www.brewinabag.com/pages/instructions',
    'https://byo.com/article/koelsch-style-profile/',
  ],
  details: {
    srUnit: 'Imperial',
    strikeAmount: 7,
    batchSize: 5,
    batchType: 'BIAB',
    ibu: 22,
    og: '1.058',
    fg: '1.014',
  },
  mash: {
    strike: 155,
    mash: 150,
    duration: {
      amount: 60,
      unit: 'mins',
    },
    grains: [
      {
        name: '2 Row',
        type: 'Grain',
        amount: 10.5,
        ppg: 32,
      },
      {
        name: 'Carapils',
        type: 'Grain',
        amount: 1,
        ppg: 28,
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
        name: 'Glacier',
        alphaAcid: 0.051,
        amount: 1,
        schedule: {
          amount: 60,
          unit: 'mins',
        },
      },
      {
        name: 'Glacier',
        alphaAcid: 0.051,
        amount: 1,
        schedule: {
          amount: 15,
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
    alternative: 'Safale US-04',
    maxTemp: 68,
    minTemp: 60,
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

