import React from 'react';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Each cuild in a list should have unique "key" prop'
])

import Routes from './routes';

export default function App() {
  return <Routes />
}