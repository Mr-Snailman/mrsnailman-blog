export default {
  title: 'Don\'t Panic Kolsch',
  route: 'dont-panic-kolsch',
  author: 'Dustin Saunders',
  updated: '2021-01-19',
  details: {
    srUnit: 'Imperial',
    strikeAmount: 7,
    batchSize: 5,
    batchType: 'BIAB',
    ibu: 25,
    og: '1.058',
    fg: '1.016',
  },
  mash: {
    strike: 156,
    mash: 152,
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
    yeast: 'WLP001',
    type: 'liquid',
    pitchRate: 0.75,
    starter: true,
  },
  condition: {
    dryHop: false,
    lager: true,
    lagerTemperature: 36,
    lagerDuration: {
      amount: 7,
      unit: 'days',
    },
  },
  equipment: [
    'No-Rinse Sanitizer (Star San, IO Star)',
    'Cleaner (OxyClean)',
    'Full Volume Kettle',
    'Brew-In-A-Bag',
    'Optional: Heat Retardant Gloves',
    'Thermometer',
    'Chiller',
    'Siphon/Transfer Mechanism',
    'Hydrometer',
    'Graduated Cylinder',
    'Fermentation Vessel',
    'Airlock',
    'Recommended: Cold Storage for Lagering',
    'Packaging Equipment (Bottles, Keg)',
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
    {
      title: 'MASH OUT',
      step: 'Once the Mash duration has finished, retrieve your Kettle. Pull the Brew-In-A-Bag from the Kettle, ensuring to let all of the additional hot liquor to drain. Gently Squeeze the bag to release the remaining hot liquor. Discard spent grains and remove bag from Kettle completely.',
    },
    {
      title: 'BOIL',
      step: 'Turn your heat element and return the lid to the pot to bring the hot liquor to a boil. Follow the Boil schedule to achieve your wort.',
    },
    {
      title: 'CHILL',
      step: 'Once the Boil has completed, immediately remove your wort from heat and begin to chill your wort.',
    },
    {
      title: 'SANITIZE',
      step: 'Ensure your remaining equipment is sanitized as after the boil is when your wort is most vulnerable.',
    }
    {
      title: 'MEASURE OG',
      step: 'Once the wort has cooled to approximately room temperature, remove the wort from the chill area. Transfer your wort to the dedicated, sanitized fermentation vessel. Take a measurement of your Original Gravity (OG) and record.',
    },
    {
      title: 'FERMENTATION',
      step: 'Pitch the yeast. At this point, affix your lid to the wort. Optionally, if you are able, aerate your wort. This has been shown to increase yeast health and start fermentation quicker. Affix your airlock and store in a consistent, temperate, dark area. Next, gather your patience as the yeast gets to work.',
    },
    {
      title: 'MEASURE FG',
      step: 'Once fermentation has seemed to stop (no airlock activity), take a sample to measure your Final Gravity (FG). If your measurement is not as low as expected, continue to be patient as your yeast may not be complete with ferementation. After 24-48 hours, measure your FG again.',
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
  references: [
    'http://howtobrew.com/book/introduction',
    'https://www.brewinabag.com/pages/instructions',
  ],
  seo: 'Thoughtful Brew Recipe: Don\'t Panic Kolsch',
}

