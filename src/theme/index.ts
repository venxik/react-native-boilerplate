import { extendTheme } from 'native-base';
import colors from './colors';
import { fontSizes, letterSpacings } from './fonts';
import components from './components';
import baseStyle from './baseStyle';

const themes = extendTheme({ colors, fontSizes, letterSpacings, components });

export { themes, baseStyle, colors, fontSizes, letterSpacings };
