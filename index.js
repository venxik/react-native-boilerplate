/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';
import { initDatadogConfig } from './src/utils';

initDatadogConfig();

AppRegistry.registerComponent(appName, () => App);
