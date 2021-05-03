import BoyleCheer from './BoyleCheer'
import CitraCoffeeStout from './CitraCoffeeStout'
import DontPanicKolsch from './DontPanicKolsch'
import Mocktoberfest from './Mocktoberfest'
import ThaiChileChocolateStout from './ThaiChileChocolateStout'
import WestCoastPineIpa from './WestCoastPineIpa'

export const UNITS = {
  'Imperial': {
    temperature: 'F',
    batch: 'gal',
    mash: 'lb',
    boil: 'oz',
    water: 'ppm',
  },
  'Metric': {
    temperature: 'C',
    batch: 'L',
    mash: 'kg',
    boil: 'g',
    water: 'ppm',
  },
}

// Order is important!
export default [
  DontPanicKolsch,
  WestCoastPineIpa,
  Mocktoberfest,
  CitraCoffeeStout,
  ThaiChileChocolateStout,
  BoyleCheer,
]
