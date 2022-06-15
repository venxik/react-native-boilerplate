import React from 'react';
import { render } from '@testing-library/react-native';
import Splash from '../Splash';
import timeTravel, { setupTimeTravel } from '../../__mocks__/timeTravel';
import { wrapper } from '../../__mocks__/wrapper';

beforeEach(setupTimeTravel);

describe('Splash screen', () => {
  it('Render Splash screen', () => {
    const splash = render(<Splash />, { wrapper }).toJSON();
    timeTravel(500);
    expect(splash).toBeTruthy();
  });
});
