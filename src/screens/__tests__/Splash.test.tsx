import React from 'react';
import { render } from '@testing-library/react-native';
import Splash from '../Splash';
import timeTravel, { setupTimeTravel } from '../../../__mocks__/timeTravel';

beforeEach(setupTimeTravel);

describe('Splash screen', () => {
  it('Render Splash screen', () => {
    const splash = render(<Splash />).toJSON();
    timeTravel(500);
    expect(splash).toBeTruthy();
  });
});
