import React from 'react';
import renderer from 'react-test-renderer';
import App from '../src';
import timeTravel, { setupTimeTravel } from '../__mocks__/timeTravel';

beforeEach(setupTimeTravel);

describe('Testing App ', () => {
  test('should render App correctly', () => {
    renderer.create(<App />);
    timeTravel(2000);
  });
});
