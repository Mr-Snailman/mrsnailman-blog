import DontPanicKolsch from './DontPanicKolsch'
import WestCoastPineIpa from './WestCoastPineIpa'
import Mocktoberfest from './Mocktoberfest'

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


export default [
  DontPanicKolsch,
  WestCoastPineIpa,
  Mocktoberfest,
]
