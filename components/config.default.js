import { convertPtToRem } from '../utils';

// For themeing, space and margin use `rem` as their basic units, and components
// will multiply their own consants over the base value.
// Font sizes follows the same
export const defaultTheme = {
  // Colors, [baseColorName][Darker|Brighter]
  dark: '#24262e',
  darkBrighter: '#282d36',
  white: '#f0f4ff',
  orange: '#ee503f',
  lightGray: '#9F9F9F',
  darkBlueBrighter: '#4a4f61',
  darkBlue: '#656b83',
  blue: '#808bb7',
  darkGray: '#2C3039',
  red: '#F05967',
  // Spacing constants
  basePadding: 1,
  baseMargin: 1,
  // Font Sizing,
  display1: `${convertPtToRem(40)}rem`,
  display2: `${convertPtToRem(28)}rem`,
  display3: `${convertPtToRem(24)}rem`,
  number1: `${convertPtToRem(48)}rem`
};
