import React from 'react';
import Splash from '../Splash';
import timeTravel, { setupTimeTravel } from '../../__mocks__/timeTravel';
import { render } from '../../__mocks__/wrapper';

beforeEach(setupTimeTravel);

describe('Splash screen', () => {
  it('Render Splash screen', () => {
    const splash = render(<Splash />);
    timeTravel(500);
    expect(splash).toBeDefined();
  });
});
