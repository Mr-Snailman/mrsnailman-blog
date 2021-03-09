import DontPanicKolsch from './DontPanicKolsch'
import WestCoastPineIpa from './WestCoastPineIpa'
import Mocktoberfest from './Mocktoberfest'

export const UNITS = {
  'Imperial': {
    temperature: 'F',
    batch: 'gal',
    mash: 'lb',
    boil: 'oz',
  },
  'Metric': {
    temperature: 'C',
    batch: 'L',
    mash: 'kg',
    boil: 'g',
  },
}


export default [
  DontPanicKolsch,
  WestCoastPineIpa,
  Mocktoberfest,
]
