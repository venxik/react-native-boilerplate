import React from 'react';
import renderer from 'react-test-renderer';
import App from '..';
import timeTravel, { setupTimeTravel } from '../../__mocks__/timeTravel';

beforeEach(setupTimeTravel);

describe('Testing App ', () => {
  test('should render App correctly', () => {
    renderer.create(<App />);
    timeTravel(1000);
  });
});
